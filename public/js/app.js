// App scripts
$(function() {
  var loggedIn = false;
  var locations = {};
  var users = {};
  var target = null;
  var socket = null;
  var profile = {};
  var channels = [];

  $.get('/locations')
    .then(function(data) {
      locations = data;
      init();
    });

  function init() {
    $('.block--login [name="height"]').html(prepareOptions(range(150, 190)));
    $('.block--login [name="weight"]').html(prepareOptions(range(40, 100)));
    $('.block--login [name="age"]').html(prepareOptions(range(18, 60)));
    $('.block--login [name="location"]').html(prepareOptions(locations));

    $('.btn--login').on('click', login);
    $('.btn--logout').on('click', logout);
    $('.form--message').on('submit', handleMessage);
    $('.btn--clear-target').on('click', function() {setTarget(null);});
  }

  function range(min, max) {
    var data = {};
    for (var i = min; i <= max; i++) {
      data[i] = i;
    }
    return data;
  }

  function prepareOptions(data) {
    return $.map(data, function(value, key) {
        return '<option value="'+key+'">'+value+'</option>';
      }).join('')
  }

  function login() {
    var data = {
      name: $('.block--login [name="name"]').val(),
      height: parseInt($('.block--login [name="height"] :selected').val(), 10),
      weight: parseInt($('.block--login [name="weight"] :selected').val(), 10),
      age: parseInt($('.block--login [name="age"] :selected').val(), 10),
      location: $('.block--login [name="location"] :selected').val()
    }

    if ( ! data.name) {
      alert('請填暱稱');
      return;
    }

    createSocket();
    socket.emit('login', data);
  }

  function logout() {
    profile = null;
    loggedIn = false;
    socket.disconnect();
    $('.block--messages').empty();
    $('.block--users').empty();
    $('.block--channels').empty();
    renderApp();
  }

  function createSocket() {
    if ( ! socket) {
      socket = io(window.location.href);
    } else {
      socket.connect(window.location.href);
      return;
    }

    socket.on('login_result', function(data) {
      if (data.success) {
        profile = data.result.profile;
        users = data.result.users;
        loggedIn = true;
        renderApp();
        renderUsers();

        socket.emit('channels', [profile.location]);
      }
    });

    socket.on('profile_result', function(data) {

    });

    socket.on('channels_result', function(data) {
      if (data.success) {
        channels = data.result;
        renderChannels();
      }
    });

    socket.on('public_message_result', function(data) {
      if (data.success) {
        $('.block--messages').append(
          $('<div>').text(
            '你說: ' + data.result.message
          )
        );
      }
    });

    socket.on('private_message_result', function(data) {
      if (data.success) {
        $('.block--messages').append(
          $('<div>').text(
            '你只對' + users[data.result.user_id].name + '說: ' + data.result.message
          )
        );
      }
    });

    socket.on('user_enter', function(data) {
      users[data.id] = data;
      renderUsers();
    });

    socket.on('user_leave', function(data) {
      delete users[data];
      if (target === data) setTarget(null);
      renderUsers();
    });

    socket.on('user_profile', function(data) {
      users[data.id] = data;
      renderUsers();
    });

    socket.on('public_message', function(data) {
      if (profile.id !== data.user_id) {
        $('.block--messages').append(
          $('<div>').text(
            users[data.user_id].name + '說: ' + data.message
          )
        );
      }
    });

    socket.on('private_message', function(data) {
      if (profile.id !== data.user_id) {
        $('.block--messages').append(
          $('<div>').text(
            users[data.user_id].name + '只對你說: ' + data.message
          )
        );
      }
    });
  }

  function renderApp() {
    if (loggedIn) {
      $('.block--login').hide();
      $('.block--chat').show();
    } else {
      $('.block--chat').hide();
      $('.block--login').show();
    }
  }

  function renderUsers() {
    var list = $('<ul>'), item, id, user;
    for (id in users) {
      user = users[id];

      item = $('<li>')
        .text('[' + locations[user.location] + '] ' + user.name + ' (' + user.height + '/' + user.weight + '/' + user.age + ')')

      if (id !== profile.id) {
        item.on('click', (function(id) {return function() { setTarget(id); }})(id));
      } else {
        item.text(item.text() + ' (你)');
      }

      item.appendTo(list);
    }
    $('.block--users').empty().append(list);
  }

  function renderChannels() {
    var list = $('<ul>'), item, id, location;
    for (id in locations) {
      item = $('<li>').text(locations[id]);
      if (channels.indexOf(id) !== -1) {
        item.addClass('active');
        if (profile.location !== id) {
          item.on('click', (function(id) {
            return function() {
              unsubscribe(id)
            }
          })(id));
        } else {
          item.text(locations[id] + ' (你在這裡)');
        }
      } else {
        item.on('click', (function(id) {
          return function() {
            subscribe(id)
          }
        })(id));
      }
      list.append(item);
    }
    $('.block--channels').empty().append(list);
  }

  function subscribe(channel) {
    channels.push(channel);
    socket.emit('channels', channels);
  }

  function unsubscribe(channel) {
    var index = channels.indexOf(channel);
    if (index !== -1) {
      channels.splice(index, 1);
    }
    socket.emit('channels', channels);
  }

  function setTarget(userId) {
    target = userId;
    $('.block--target').text(
      '告訴' + (target ? users[target].name : '所有人')
    );
  }

  function handleMessage(event) {
    event.preventDefault();
    var message = $('[name="message"]').val().trim();
    if ( ! message) return;

    if (target) {
      socket.emit('private_message', {user_id: target, message: message});
    } else {
      socket.emit('public_message', {message: message});
    }

    $('[name="message"]').val('');
  }

});