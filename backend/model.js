const mongoose = require('mongoose');
const { Schema } = mongoose;
// Create a schema for the user model. This will be used to create and store new
const USERSCHEMA = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
    },
}
)
module.exports = mongoose.model('User', USERSCHEMA);