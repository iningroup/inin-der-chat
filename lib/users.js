'use strict';

var locations = require('./attributes/locations');
var list = {};

function add(id, data) {
  if ( ! (data.location in locations)) {
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
  let user = list[id];

  if ( ! user) {
    return false;
  }

  if (data.location && ! (data.location in locations)) {
    return false;
  }

  user.name = data.name || user.name;
  user.height = data.height || user.height;
  user.weight = data.weight || user.weight;
  user.age = data.age || user.age;
  user.location = data.location || user.location;

  return user;
}

function all() {
  return list;
}

exports.add = add;
exports.remove = remove;
exports.updateProfile = updateProfile;
exports.all = all;