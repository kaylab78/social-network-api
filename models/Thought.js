const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
            get: createdAtVal => dateFormat(createdVal)
        },
        username: {
            type: String,
            required: true
        },
        // reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
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