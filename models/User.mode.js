const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    name: String,
    email: String,
    password: { type: String, require: true },
    product: [{
        type: String,
        ref: 'Product'
    }],
    role: [{
        type: Schema.Types.ObjectId, ref: 'Role'
    }]
});

const User = model('User', userSchema);
module.exports = User;
