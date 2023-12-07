const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Rutas para productos
router.get("/api/products", productsController.getProducts); // Obtener todos los productos
router.post("/api/products", productsController.saveProduct); // Crear un nuevo producto
router.get("/api/products/:pid", productsController.getProductById); // Obtener un producto por su ID
router.put("/api/products/:pid", productsController.updateProduct); // Actualizar un producto por su ID
router.delete("/api/products/:pid", productsController.deleteProduct); // Eliminar un producto por su ID



module.exports = router;