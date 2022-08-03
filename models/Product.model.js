const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    image: String

    // user: {
    //     type: String,
    //     ref: 'user',
    // },

});

const Product = model('Product', ProductSchema);

module.exports = Product;