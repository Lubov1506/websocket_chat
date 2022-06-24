const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    login: {
        type:String,
        required: true,
        min:1,
        max: 1024
    },
    email: {
        type: String
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }
},{
    timestamp: true
})
const User = mongoose.model('Message', userSchema)
module.exports = User