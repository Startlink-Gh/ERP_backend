const express = require('express');
const categories = express.Router();


const {
    addCategory,
} = require('../controllers/categoriesController');

categories.post('/add', addCategory);

categories.get('/', (req, res) => {
    res.send("welcome to categories!");
});



module.exports = categories;