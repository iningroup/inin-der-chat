'use strict';

var locations = require('./attributes/locations');
var users = require('./users');
var ducktype = require('ducktype');
var shortid = require('shortid');

var idMap = {};

function listen(io) {
  io.on('connection', handleConnection);
}

function handleConnection(socket) {
  let id = shortid.generate();
  let location = null;
  let channels = new Set();

  // User enter
  console.info(`User enter [id: ${socket.id}]`);
  users.add(id);
  idMap[id] = socket.id;

  // User leave
  socket.on('disconnect', function() {
    console.info(`User leave [id: ${socket.id}]`);
    users.remove(id);
    delete idMap[id];
  });

  // User set profile
  // data:object {name:string, height:int?, weight:int?, age:int?}
  let profileType = ducktype({
    name: String,
    height: ducktype(Number, {optional: true}),
    weight: ducktype(Number, {optional: true}),
    age: ducktype(Number, {optional: true}),
  });
  socket.on('profile', function(data) {
    if ( ! profileType.test(data)) {
      socket.emit('profile_result', {success: false});
      return;
    }

    if (user = users.updateProfile(id, data)) {
      socket.emit('profile_result', {success: true, result: user});
    } else {
      socket.emit('profile_result', {success: false});
    }
  });

  // User set location
  // data:string
  let locationType = ducktype(String);
  socket.on('location', function(data) {
    if ( ! locationType.test(data)) {
      socket.emit('location_result', {success: false});
      return;
    }

    if (newLocation = users.updateLocation(id, data)) {
      location = newLocation;
      socket.emit('location_result', {success: true, result: newLocation});
    } else {
      socket.emit('location_result', {success: false});
    }
  });

  // User set interested locations
  // data:array[String]
  let channelsType = ducktype([String]);
  socket.on('channels', function(data) {
    if ( ! channelsType.test(data)) {
      socket.emit('channels_result', {success: false});
      return;
    }

    for (let channel of data) {
      if ( ! (channel in locations)) {
        socket.emit('channels_result', {success: false});
        return;
      }
    }

    let newChannels = new Set(data);

    // Join channels
    for (let channel of newChannels) {
      if ( ! channels.has(channel)) {
        channels.add(channel);
        socket.join(channel);
      }
    }

    // Leave channels
    for (let channel of channels) {
      if ( ! newChannels.has(channel)) {
        channels.delete(channel);
        socket.leave(channel);
      }
    }

    socket.emit('channels_result', {success: true, result: Array.from(channels)});
  });

  // User send public message to the location channel
  // data:object {message:string}
  let publicMessageType = ducktype({message: String});
  socket.on('public_message', function(data) {
    if ( ! publicMessageType.test(data)) {
      socket.emit('public_message_result', {success: false});
      return;
    }

    if (location) {
      socket.to(location).emit('public_message', {
        message: data.message
      });
    }
  });

  // User send private message to some user
  // data:object {user_id:string, message:string}
  let privateMessageType = ducktype({user_id: String, message: String});
  socket.on('private_message', function(data) {
    if ( ! privateMessageType.test(data)) {
      socket.emit('private_message_result', {success: false});
      return;
    }

    let socketId = idMap[data.user_id];

    if (socketId) {
      io.sockets.connected[socketId].emit('private_message', {
        user_id: id,
        message: data.message
      });
    }
  });
}

exports.locations = locations;
exports.users = users;
exports.listen = listen;