require('dotenv').config();
const express = require('express');

//initialize express
const app = express();

//import routes
const auth = require('./routes/authRoute');

//initialize express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Define Routes
app.use('/api/v1/auth', auth);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
