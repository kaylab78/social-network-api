const { Schema, model, Types } = require('mongoose');

UserSchema = new Schema(
    {
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
            // By setting all email addresses to lowercase, an email can only be used for one account. Reference: Mongoose docs
            lowercase: true,
            // Reference: Ramon22
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address.']
        }
        // thoughts: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Thought'
        //     }
        // ],
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User'
        //     }
        // ]
    }
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    //     id: false
    // }
);

// UserSchema.virtual('friendCount').get(function() {
//     return this.friends.reduce((total, user) => total + user.friends.length + 1, 0);
// });

const User = model('User', UserSchema);

module.exports = User;