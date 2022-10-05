const express = require('express');
const categories = express.Router();


const {
    addCategory,
    deleteCategory,
    getCategories,
} = require('../controllers/categoriesController');

categories.get('/getCategories', getCategories);

categories.post('/add', addCategory);

categories.delete('/delete/:id', deleteCategory);

categories.get('/', (req, res) => {
    res.send("welcome to categories!");
});



module.exports = categories;