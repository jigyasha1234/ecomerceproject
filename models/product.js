const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
},{
    versionKey: false
});

// creating a new model called "'product"
const Product = mongoose.model('Product', productSchema);

module.exports = Product;