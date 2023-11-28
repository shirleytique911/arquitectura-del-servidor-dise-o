import productModel from "../models/products.model.js";

export default class Products {
  constructor() {}




  getAllProducts = async () => {
    let result = await productModel.find().lean();
    return result;
  };

 
  getProductById = async (id) => {
    try {
        const result = await productsModel.findById(id);
        if(!result) return {status: 'Error', message: 'Error al buscar producto'};
        return result;
    } catch (error) {
        throw new Error(' Error al buscar productos' + error)
    }
};

  //Definir el limite de productos a visualizar.
  getProductsLimit = async (limit) => {
    try {
      const products = await productModel.find().limit(limit);
      limit = products.length < limit ? products.length : limit;

      return products;
    } catch (error) {
      throw error;
    }
  };


  //Mostrar el listado de productos de la pagina solicitada
  getProductsPage = async (page, productByPage) => {
    page = page <= 0 ? 1 : page;
    try {
      const products = await productModel
        .find()
        .skip((page - 1) * productByPage)
        .limit(productByPage);
      return products;
    } catch (error) {
      throw error;
    }
  };

  
  //Mostrar cuando se  cumpla con el parametro solicitado.
  getProductQuery = async (query) => {
    try {
      const products = await productModel.find({
        description: { $regex: query, $options: "i" },
      });
      return products;
    } catch (error) {
      throw error;
    }
  };

  //Ordenar los productos por precio
  getProductOrder = async (sort) => {
    try {
      const products = await productModel.find().sort({ price: sort });
      return products;
    } catch (error) {
      throw new Error(`Error al ordenar productos: ${error.message}`);
    }
  };

  updateProduct = async (idProduct, product) => {
    let result = await productModel.findByIdAndUpdate(idProduct, product, {
      new: true,
    }); // actualizar
    console.log(" Producto actualizado");
    return result;
  };


  deleteProduct = async (idProduct) => {
    let result = await productModel.deleteOne({ _id: idProduct });
    console.log(" Producto Eliminado");
    return result;
  };
//agregar producto
  createProduct = async (title, description, code, price, stock, category) => {
    try {
        const result = await productsModel.create({ title, description, code, price, stock, category });
        if (!result) return { status: 'Error', message: 'No se pudo agregar producto ' };
        return result;
    } catch (error) {
        throw new Error(' Error al agregar producto')
    }
  }
}