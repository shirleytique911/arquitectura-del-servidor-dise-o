const mongoose = require("mongoose");

const collection = "products";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    code: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, default: "poleras" }
});

const ProductsModel = mongoose.model(collection, productSchema);

module.exports = ProductsModel;