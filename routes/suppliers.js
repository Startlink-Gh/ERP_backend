const express = require('express');
const routes = express.Router();


const {
    addSuppliers,
    getSuppliers,
} = require('../controllers/supplierController');

//get all suppliers
routes.get('/getSuppliers', getSuppliers);

//add new suppliers
routes.post('/add', addSuppliers);

module.exports = routes;