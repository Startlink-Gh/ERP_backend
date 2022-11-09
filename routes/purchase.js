const express = require('express');
const routes = express.Router();

const { addPurchase, getPurchaseDetails, getAllPurchases } = require('../controllers/purchaseController');

routes.post('/createPurchase', addPurchase);
routes.get('/getPurchaseDetails', getPurchaseDetails);
routes.get('/getAllPurchases', getAllPurchases);

module.exports = routes;
