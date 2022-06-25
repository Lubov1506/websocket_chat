const mongoose =require('mongoose')
const config = require('../configs').db.development
const Message = require('./messages')
const User = require('./messages')

mongoose.connect(`mongodb://${config.hostName}:${config.port}/${config.dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = {
    Message, User
}