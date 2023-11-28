import userModel from "../models/users.model.js";

export default class Users {
  constructor() {}


  getAllUsers = async () => {
    let result = await userModel.find().lean();
    return result;
  };

  getUserById = async (idUser) => {
    try {
      const user = await userModel.findById(idUser);
      console.log(" User found ");
      return user;
    } catch (error) {
      console.log(" User not found");
    }
  };


  saveUser = async (user) => {
    let result = await userModel.create(user);
    console.log("User create sucess");
    return result;
  };

  deleteUser = async (idUser) => {
    let result = await userModel.findByIdAndDelete(idUser);
    console.log(" User Deleted");
    return result;
  };
}