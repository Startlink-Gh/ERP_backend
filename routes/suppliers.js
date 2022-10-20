const express = require('express');
const routes = express.Router();


const {
    addSuppliers,
    getSuppliers,
    getSupplierDetails,
    updateSupplierDetails,
} = require('../controllers/supplierController');

//get all suppliers
routes.get('/getSuppliers', getSuppliers);

//get individual supplier details
routes.get('/getSupplierDetails', getSupplierDetails);

//add new suppliers
routes.post('/add', addSuppliers);

//update supplier's details
routes.patch('/update', updateSupplierDetails);

module.exports = routes;