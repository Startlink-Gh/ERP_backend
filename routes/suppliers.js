const express = require('express');
const routes = express.Router();

const {
  addSupplier,
  getSuppliers,
  getSupplierDetails,
  updateSupplierDetails,
  deleteSupplier,
} = require('../controllers/supplierController');

routes.get('/getSuppliers', getSuppliers);

routes.get('/getSupplierDetails', getSupplierDetails);

routes.post('/addSupplier', addSupplier);

routes.patch('/updateSupplier', updateSupplierDetails);

routes.delete('/delete/:id', deleteSupplier);

module.exports = routes;
