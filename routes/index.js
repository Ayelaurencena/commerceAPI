const express = require('express');
const router = express.Router();
const ProductController = require('./../controllers/productController');
const ProductService = require("./../services/productService");
const ProductInstance = new ProductController(new ProductService());

/* Homepage */
router.get('/', function(req, res, next) {
  res.send('hola');
} )

/* GET products. */
router.get('/products', function(req, res, next) {
  ProductInstance.getProducts(req, res);
});


/* GET product */
router.get('/product/:id', function(req, res, next) {
  ProductInstance.getProductById(req, res);
})

/* POST product */
router.post('/create', function(req, res, next) {
  ProductInstance.postProduct(req, res);
})

/* PUT product */
router.put('/edit/:id', function(req, res, next) {
  ProductInstance.editProduct(req, res);
})

/* Model update */
router.put('/products/discount', function(req, res, next) {
  ProductInstance.addDiscount(req, res);
})

/* free shipping */

router.get('/free_shipping', function(req, res, next) {
  ProductInstance.getFreeShipping(req, res);
})


module.exports = router;
