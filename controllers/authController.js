const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../database');
const uuid = require('uuid');

//@desc Register a new user
//@method POST
//@route /api/v1/auth/register
//@access public
exports.registerUser = async (req, res) => {
  try {
    //check if username used already exists
    db.query(
      `SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(
        req.body.username
      )}); AND email = LOWER(${db.escape(req.body.email)})`,
      (err, result) => {
        if (result.length) {
          return res.status(400).json({
            success: false,
            error: 'This username is already in use!',
          });
        } else {
          // username is available and can be used.
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(400).json({
                success: false,
                error: err,
              });
            } else {
              // has hashed pw => add to database
              db.query(
                `INSERT INTO users (user_id, username, email, registered, password) VALUES ('${uuid.v4()}', 
                ${db.escape(req.body.username)}, ${db.escape(
                  req.body.email
                )}, now(), ${db.escape(hash)})`,
                (err, result) => {
                  if (err) {
                    return res.status(400).json({
                      success: false,
                      error: err,
                    });
                  }
                  return res.status(201).json({
                    success: true,
                    message: 'User registered successfully',
                  });
                }
              );
            }
          });
        }
      }
    );
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
