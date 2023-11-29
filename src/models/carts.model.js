import mongoose from "mongoose";

const cartsCollection = "carts";

const cartSchema = new mongoose.Schema({
  products:  [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        qty: { type: Number, required: true, default: 1 },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
});

cartSchema.pre('find', function(){
  this.populate('products.product')
})

const cartModel = mongoose.model(cartsCollection, cartSchema);

export default cartModel;
