'use strict';

var locations = require('./attributes/locations');
var list = {};

function add(id, data) {
  if ( ! (location in locations)) {
    return false;
  }

  let user = list[id] = {
    id: id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    age: data.age,
    location: data.location
  };

  return user;
}

function remove(id) {
  delete list[id];
}

function updateProfile(id, data) {
  var user = list[id];

  if ( ! user) {
    return false;
  }

  user.name = data.name || user.name;
  user.height = data.height || user.height;
  user.weight = data.weight || user.weight;
  user.age = data.age || user.age;

  return user;
}

function updateLocation(id, location) {
  var user = list[id];

  if ( ! user || ! (location in locations)) {
    return false;
  }

  user.location = location;
  return location;
}

function all() {
  return list;
}

exports.add = add;
exports.remove = remove;
exports.updateProfile = updateProfile;
exports.updateLocation = updateLocation;
exports.all = all;