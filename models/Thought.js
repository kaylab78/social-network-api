const { Schema, model, Types } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // Reference: Mongoose docs
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // getter for formatting date
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        // reactions: [ReactionSchema]
    }
    // {
    //     toJSON: {
    //         virtuals: true,
    //         getters: true
    //     },
    //     id: false
    // }
);

// const ReactionSchema = new Schema(
//     {
//         reactionId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId()
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             maxLength: 280
//         },
//         username: {
//             type: String,
//             required: true
//         },
//         createdAt: {
//             type: DataTransfer,
//             default: Date.now,
//             // getter to format date
//         }
//     }
// )

// ThoughtSchema.virtual('reactionCount').get(function() {
//     return this.reactions.length;
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;