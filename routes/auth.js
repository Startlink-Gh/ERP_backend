const express = require('express');
const router = express.Router();

const {
  registerUser,
  logInUser,
  refreshToken,
} = require('../controllers/authController');

router.post('/register', registerUser);

router.post('/login', logInUser);

router.post('/refresh-token', refreshToken);

module.exports = router;
