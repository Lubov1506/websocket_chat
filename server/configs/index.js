module.exports = {

db: {
    development:{
        hostName: 'localhost',
        port: 27017,
        dbName: 'chats'
    }
},
port: 5000,
SOCKET_EVENTS: {
    NEW_MESSAGE: 'new message',
    NEW_MESSAGE_ERROR: 'new message error'
}
}

