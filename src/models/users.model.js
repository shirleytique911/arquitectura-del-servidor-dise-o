import mongoose from "mongoose";

const userCollection = "Users";
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: String,
  password: String,
  rol: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  cartId: { type: mongoose.SchemaTypes.ObjectId, ref: "carts" },
});
const userModel = mongoose.model(userCollection, userSchema);
export default userModel;