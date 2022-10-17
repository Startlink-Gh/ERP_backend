const express = require('express');
const routes = express.Router();

const
    {
        addPurchase,
        getPurchaseInvoicesDetails,
    } = require('../controllers/purchaseController');


//create a new purchase invoice
routes.post('/createPurchase', addPurchase);

//get individual invoices
routes.get('/getPurchaseInvoiceDetails', getPurchaseInvoicesDetails);

module.exports = routes;