const mongoose = require('mongoose');
const { messageSchema } = require('./messageModel');

const chatSchema = mongoose.Schema({
    messages: {
        type: [messageSchema]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
