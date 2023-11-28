import messageModel from "../models/messages.model.js"

export default class Message {
  constructor() {}


  sendMessage = async (message) => {
    let result = await messageModel.create(message);
    console.log("Mensaje guardado");
    return result;
  };


  getAllMessage = async () => {
    let result = await messageModel.find().lean();
    return result;
  };
}