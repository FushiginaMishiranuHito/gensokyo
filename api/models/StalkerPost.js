const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const StalkerPostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { collection : 'stalker'});

module.exports = mongoose.model('Posts', StalkerPostSchema);