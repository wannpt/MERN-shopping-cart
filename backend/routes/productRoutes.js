const express = require('express');
const router = express.Router();
const { getAllProduct, getProductById} = require('../controller/productController');

// @description GET all product from db
// @route       GET /api/products
// @access      Public
router.get('/', getAllProduct);

// @description GET product by id from db
// @route       GET /api/products/:id
// @access      Public
router.get('/:id',getProductById);

module.exports = router;