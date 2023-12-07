const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const http = require("http");
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Importar rutas
const productsRouter = require("./routes/productsRouter.js");



const app = express();
const server = http.createServer(app)
const port = 3000; // Puedes usar el puerto que desees

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

if (!process.env.MONGO_URL) {
  console.error("La variable MONGO_URL no está definida en el archivo .env");
  process.exit(1); // Salir de la aplicación si la variable no está definida
}

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("conectado a la base de datos")
    })
    .catch(error =>{
        console.log("error al conectarse a la base de datos", error)
    })

server.listen(port, ()=>{
    console.log(`servidor corriendo en puerto ${port}`)
});



// Configura las rutas
app.use("/", productsRouter);

