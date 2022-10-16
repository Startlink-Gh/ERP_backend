const express = require('express');
const routes = express.Router();

const
    {
        addPurchase,
    } = require('../controllers/purchaseController');


//create a new purchase invoice
routes.post('/createPurchase', addPurchase);


module.exports = routes;