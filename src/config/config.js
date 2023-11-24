import dotenv from 'dotenv'
// import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://shirleytique911:GKZraArQ50QuepXc@cluster0.dvtsniz.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>{
//     console.log("Conectado a la base de datos")
// })
// .catch(error => {
//     console.error("Error al conectarse a la base de datos, error"+error)
// })

dotenv.config()
export default {
    mongoUrl:process.env.MONGO_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackUrl: process.env.CALLBACK_URL,
    secretKey: process.env.SECRET_KEY,
    keyToken: process.env.KEY_TOKEN
}