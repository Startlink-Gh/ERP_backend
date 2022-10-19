const express = require('express');
const routes = express.Router();

const { getProducts, addNewProduct, deleteProduct } = require('../controllers/productController');

//get products
routes.get('/getProducts', getProducts);
routes.post('/addProduct', addNewProduct);
routes.delete('/deleteProduct', deleteProduct);

module.exports = routes;
