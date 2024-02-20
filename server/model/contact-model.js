const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
   
    message: {
        type: String,
        required: true
    }
})

const contactModel = mongoose.model('Contact', contactSchema)
module.exports = contactModel