const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    text: {
        type:String,
        required: true,
        min:1,
        max: 1024
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamp: true
})
const Message = mongoose.model('Message', messageSchema)
module.exports = Message