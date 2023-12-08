const express = require('express');
const router = express.Router();

const productController = require('../controllers/products_controller');

// get all products
router.get("/",productController.Products);


// create new product
router.post("/create",productController.create);

// update product's quantity
router.post("/:productID/update_quantity/",productController.updateQuantity);

// delete product by id
router.delete("delete/:productID",productController.delete);

module.exports = router;