require('dotenv').config();
const express = require('express');
const cors = require('cors');
//initialize express
const app = express();

//enable cors for all routes
app.use(cors());

const auth = require('./routes/auth');
const categories = require('./routes/categories');
const suppliers = require('./routes/suppliers');
const products = require('./routes/products');

const purchase = require('./routes/purchase');
//initialize express middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Define Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/categories', categories);
app.use('/api/v1/suppliers', suppliers);
app.use('/api/v1/products', products);
app.use('/api/v1/purchase', purchase);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
