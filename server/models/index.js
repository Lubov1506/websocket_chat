const mongoose =require('mongoose')
const config = require('../configs').db['development']
const {Message, User} = require('./')

mongoose.connect(`mongodb://${config.hostName}${config.port}${config.dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopologt: true
})

module.exports = {
    Message, User
}