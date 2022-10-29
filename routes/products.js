const express = require('express');
const routes = express.Router();

const { getProducts, addNewProduct, getProductDetails } = require('../controllers/productController');

routes.get('/getProducts', getProducts);

routes.get('/getProductDetails', getProductDetails);

routes.post('/addProducts', addNewProduct);

module.exports = routes;
