require('dotenv').config();
const express = require('express');

//initialize express
const app = express();

const auth = require('./routes/auth');
const categories = require('./routes/categories');
const suppliers = require('./routes/suppliers');
const products = require('./routes/products');

//initialize express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Define Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/categories', categories);
app.use('/api/v1/suppliers', suppliers);
app.use('/api/v1/products', products);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
