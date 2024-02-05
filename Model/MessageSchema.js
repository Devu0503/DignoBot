const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['user-msg', 'chatbot-msg'],
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
