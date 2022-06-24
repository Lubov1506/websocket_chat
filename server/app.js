const express = require('express')
const cors = require('cors')
const {Message, User} = require('./models')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', async (req,res,next)=>{
    try{
        const messages = await Message.find({})
        res.status(200).send(messages)
    }catch(err){
        next(err)
    }
})

app.use((err,req,res,next)=>{
    res.status(500), send('Some error')
})

module.exports = app;