const Product = require("./../models/productModel");

class ProductService {

    getProducts() {
        const query = Product.find().exec();
        return query 

    }
    getProductById(id) {
        const query =  Product.findOne({ _id: id }).exec();
        return query;
    }

    getFreeShipping() {
        const query = Product.find({"entrega_gratis" : true}).exec();
        return query;
    }

    postProduct(data) {
        const newProduct = new Product(data);
        return newProduct.save();
    }

   editProduct(id, data) {
        const query = Product.findOneAndUpdate({ _id: id}, data).exec();
        console.log(query);
        return query;
    }

    async addDiscount(data) {
        const query = await Product.updateMany({discount: 0}).exec();
        return query;
    }
}
 module.exports = ProductService;
