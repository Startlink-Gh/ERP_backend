const express = require("express")
const routes = express.Router();

const {
    getProducts,
    addNewProduct,
} = require('../controllers/productController');

//get products
routes.get('/getProducts', getProducts);

routes.post('/addProducts', addNewProduct);


module.exports = routes;