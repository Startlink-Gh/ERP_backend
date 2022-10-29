const express = require('express');
const routes = express.Router();

const { addPurchase, getPurchaseInvoicesDetails } = require('../controllers/purchaseController');

routes.post('/createPurchase', addPurchase);
routes.get('/getPurchaseInvoiceDetails', getPurchaseInvoicesDetails);

module.exports = routes;
