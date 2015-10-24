var locations = require('./attributes/locations');
var list = {};

function add(id) {
  list[id] = {
    id: id,
    name: null,
    height: null,
    weight: null,
    age: null,
    location: null
  };
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