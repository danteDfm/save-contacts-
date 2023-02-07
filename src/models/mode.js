const {Schema, model} = require('mongoose');

const schema = new Schema({

    name: {
        type: String, 
        required: true
    },
    contact: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const mdl = model('contacts', schema);

module.exports = mdl;