const express = require('express');

//initialize express router
const router = express.Router();

//auth controllers
const { registerUser, logInUser, refreshToken } = require('../controllers/authController');

//middlewares
const { validateRegister } = require('../middlewares/authMiddleware');

router.post('/register', validateRegister, registerUser);

router.post('/login', logInUser);

router.post('/refresh-token', refreshToken);

module.exports = router;
