const ProductsModel = require("../models/productsModel.js");

class Product {
    getProducts = async () => {
        try {
            let products = await ProductsModel.find();
            return products;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getProductById = async (id) => {
        

        try {
            let product = await ProductsModel.findOne({ _id: id });
            return product;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    saveProduct = async (product) => {
        try {
            let result = await ProductsModel.create(product);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    updateProduct = async (id, product) => {
        try {
            let result = await ProductsModel.updateOne({ _id: id }, { $set: product });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    deleteProduct = async (id) => {
        try {
            let result = await ProductsModel.deleteOne({ _id: id });
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = Product;