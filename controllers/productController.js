class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async getProducts(req, res) {

        const productList = await this.productService.getProducts();
        res.json(productList);
    }

    async getProductById(req, res) {
        const { id } = req.params;
        const product = await this.productService.getProductById(id);
        res.json(product);
    }

    async getFreeShipping(req, res) {
        const free_shipping = await this.productService.getFreeShipping();
        res.json(free_shipping);
    }

    async postProduct(req, res) {
        const { nombre, precio, descripcion, categoria, cantidad_en_stock, entrega_gratis} = req.body;
        const data = {
            nombre : nombre,
            precio : precio,
            descripcion : descripcion,
            categoria : categoria,
            cantidad_en_stock : cantidad_en_stock,
            entrega_gratis : entrega_gratis
        }

        const postProduct = await this.productService.postProduct(data);
        res.send(`El siguiente producto ha sido creado: ${postProduct}`)

    }

    async editProduct(req, res) {
        const { id } = req.params;
        const { nombre, precio, descripcion, categoria, cantidad_en_stock, entrega_gratis} = req.body;
        const data = {
            nombre : nombre,
            precio : precio,
            descripcion : descripcion,
            categoria : categoria,
            cantidad_en_stock : cantidad_en_stock,
            entrega_gratis : entrega_gratis
        }
        
        const editProduct = await this.productService.editProduct(id, data);
        //El producto que me viene luego de editar es el viejo, pero en la BD se crea correctamente y 
        //la ruta GET lo trae correctamente.
        res.send(`El siguiente producto ha sido actualizado ${editProduct}`)
    }

    addDiscount(req, res) {
        const data = {
            discount : 0
        }
        const discount = this.productService.addDiscount(data);
        res.send(`Se le ha agregado la propiedad ${discount} correctamente a todos los productos`);
    }
}

module.exports = ProductController;

