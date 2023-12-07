const Product = require("../dao/clases/products.dao.js");

const productsService = new Product();

const saveProduct = async (req, res) => {
    const product = req.body;
    try {
        let result = await productsService.saveProduct(product);
        res.send({ status: "success", result: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error", error: "Todo very bad" });
    }
};

const getProducts = async (req, res) => {
    try {
        let result = await productsService.getProducts();
        res.send({ status: "success", result: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error", error: "Todo very bad" });
    }
};

const updateProduct = async (req, res) => {
    const { pid } = req.params;
    const updatedProduct = req.body;

    try {
        let result = await productsService.updateProduct(pid, updatedProduct);
        res.send({ status: "success", result: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error", error: "Todo very bad" });
    }
};

const getProductById = async (req, res) => {
    const { pid } = req.params;
    console.log(pid)
    try {
        let product = await productsService.getProductById(pid);
        res.send({ status: "success", result: product });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error", error: "Todo very bad" });
    }
};

const deleteProduct = async (req, res) => {
    const { pid } = req.params;
    try {
        let result = await productsService.deleteProduct(pid);
        res.send({ status: "success", result: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: "error", error: "Todo very bad" });
    }
};

module.exports = {
    getProducts,
    getProductById,
    saveProduct,
    deleteProduct,
    updateProduct
};