const { Schema, model } = require('mongoose');

UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please choose a username.',
        trim: true
    },
    email: {
        type: String,
        required: 'Please enter your email address.',
        unique: true,
        // By setting all email addresses to lowercase, an email can only be used for one account. Referenced Mongoose docs.
        lowercase: true,
        // validate:
    }
})