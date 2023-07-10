const { Schema, model, ObjectId } = require('mongoose');

const userSchema = new Schema(
{
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],

    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

// Creating a virtual called friendCount that retrieves the length of the user's friends 
// array field on query

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// Initialize our User model
const User = model('User', userSchema);

module.exports = User;