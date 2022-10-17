const express = require("express")
const routes = express.Router();

const {
    getProducts,
    addNewProduct,
    getProductDetails,
} = require('../controllers/productController');

//get products
routes.get('/getProducts', getProducts);

//get single product
routes.get('/getProductDetails', getProductDetails);


routes.post('/addProducts', addNewProduct);


module.exports = routes;