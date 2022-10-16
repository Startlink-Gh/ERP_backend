const connection = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

class Auth {
  static getAuthInstance() {
    return new Auth();
  }
  async registerUser(email, password, fullname) {
    try {
      //hash password
      bcrypt.hash(password, 10, async (err, hashedPassword) => {
        if (err) {
          return err;
        } else {
          const response = await new Promise((resolve, reject) => {
            const query = 'INSERT INTO users (username, email, password) VALUES (?,?,?);';

            connection.query(query, [fullname, email, hashedPassword], (err, result) => {
              if (err) reject(new Error(err.message));
              resolve(result);
            });
          });
          console.log('userRegisteredRes==>', response);
          return response;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async checkIfUserExist(email) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = `SELECT * FROM users WHERE email = ?;`;

        connection.query(query, [email], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      console.log('userExistsRes==>', response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async loginUser(email, password) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Auth;
