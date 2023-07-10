const { Schema, model } = require('mongoose');
const  reactionSchema  = require('./reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function(date) {
                return date.toLocaleString();
            }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

// Creating a virtual called reactionCount that retrieves the length of the thought's reactions 
// array field on query

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Initialize our User model
const Thought = model('Thoughts', thoughtSchema);

module.exports = Thought;