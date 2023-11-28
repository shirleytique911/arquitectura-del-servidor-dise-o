import mongoose from "mongoose";

const userCollection = "Users";

const userSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: String,
  email: {type: String, required: true},
  age: Number,
  password: String,
  rol:{ String
},

  cartId: { type: mongoose.SchemaTypes.ObjectId, ref: "carts"},
 })
  ;
const userModel = mongoose.model(userCollection, userSchema);
export default userModel;