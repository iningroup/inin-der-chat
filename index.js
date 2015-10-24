var app = require('koa')();
var router = require('koa-router')();
var serveStatic = require('koa-static');
var http = require('http');
var socket = require('socket.io');
var chatroom = require('./lib/chatroom');

var server, io;
var port = process.env.PORT || 3000;

app.use(serveStatic('./public'));
app.use(router.routes());
app.use(router.allowedMethods());

server = http.createServer(app.callback());
io = socket(server);

// Main logic start
router.get('/locations', function* (next) {
  this.type = 'json';
  this.body = chatroom.locations;
});

router.get('/users', function* (next) {
  this.type = 'json';
  this.body = chatroom.users.all();
});

chatroom.listen(io);

// Start the server
server.listen(port);
console.info(`App is running on port ${port}`);
