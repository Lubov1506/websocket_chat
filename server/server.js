const http = require('http');
const app = require('./app');
const SocketServer = require('socket.io');

const server = http.createServer(app);

const io = SocketServer(server);

server.listen(3000, ()=>{
    console.log('Am alive');
})