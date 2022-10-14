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

module.exports = categories;
