const express = require('express');
const router = express.Router();
const { registerUser, logInUser, refreshToken } = require('../controllers/authController');
const { validateRegister } = require('../middlewares/authMiddleware');

router.post('/register', validateRegister, registerUser);

router.post('/login', logInUser);

router.post('/refresh-token', refreshToken);

module.exports = router;
