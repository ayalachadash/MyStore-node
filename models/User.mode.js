const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    name: String,
    email: String,
    password: {type: String, require: true },
    product:[ {
        type: String,
        ref: 'Product'
    }],
});

const User = model('User', userSchema);
module.exports = User;
