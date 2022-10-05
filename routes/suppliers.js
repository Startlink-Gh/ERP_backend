const express = require('express');
const routes = express.Router();


const {
    addSuppliers,
    getSuppliers,
    updateSupplierDetails,
} = require('../controllers/supplierController');

//get all suppliers
routes.get('/getSuppliers', getSuppliers);

//add new suppliers
routes.post('/add', addSuppliers);

//update supplier's details
routes.patch('/update', updateSupplierDetails);

module.exports = routes;