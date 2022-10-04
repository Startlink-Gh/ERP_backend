const express = require('express');
const routes = express.Router();


const {
    addSuppliers,
    getSupplier,
} = require('../controllers/supplierController');

// routes.get('/getCategories', getCategories);

routes.post('/add', addSuppliers);

// routes.delete('/delete/:id', deleteCategory);

routes.get('/', (req, res) => {
    res.send("welcome to suppliers!");
});



module.exports = routes;