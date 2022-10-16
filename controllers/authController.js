const Auth = require('../models/Auth');
const db = Auth.getAuthInstance;

//@desc Register a new user
//@method POST
//@route /api/v1/auth/register
//@access public
exports.registerUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

//@desc Authenticate and Login a user
//@method POST
//@route /api/v1/auth/login
//@access public
exports.logInUser = async (req, res) => {
  res.send('Login Route Hit!!!');
  try {
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

//@desc Get Refresh token
//@method POST
//@route /api/v1/auth/refresh-token
//@access public
exports.refreshToken = async (req, res) => {
  res.send('Refresh Token Route Hit!!!');
  try {
  } catch (err) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
