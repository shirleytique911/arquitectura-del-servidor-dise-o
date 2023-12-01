import { Router } from "express";
import Message from "../dao/messages.js";
// import viewRouter from "./view.routes.js";

const messageRouter = Router();
const messageManager = new Message();

//!! MENSAJE
messageRouter.post("/", async (req, res) => {
   let { user, message } = req.body;
   console.log("aja")
 
   const newMessage = {
      user: user,
      message: message
   };
 
   res.send(await messageManager.sendMessage(newMessage));
 });
 
 //!!GET 

 messageRouter.get("/", async (req, res) => {
   try {
     const messages = await messageManager.getAllMessage();
     res.send({ status: "succes", payload: messages });
   } catch (error) {
     console.error("Error en la ruta GET /messages:", error);
   }
 });

 export default messageRouter;