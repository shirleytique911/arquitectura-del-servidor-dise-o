import mongoose from "mongoose";
import  paginate  from "mongoose-paginate-v2";

const productsCollection = "products";

const productSchema = mongoose.Schema({
   title: { type: String, required: true},
   description: { type: String, required: true},
   price: { type: Number, required: true},
   image: { type: String, required: true},
   category: { type: String, required: true},
   stock: { type: Number, required: true},
});

productSchema.plugin(paginate)

const productModel = mongoose.model(productsCollection, productSchema);

export default productModel