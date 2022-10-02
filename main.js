const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const auth = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/auth', auth);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
