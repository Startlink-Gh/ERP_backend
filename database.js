const dotenv = require('dotenv');
const { response } = require('express');
dotenv.config();
const mysql = require('mysql');
let instance = null;


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('db' + connection.state);
});

class database {
    static getDatabaseInstance() {
        return instance ? instance : new database();
    }

    //get all the categories
    async getCategories() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM product_category;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;

        } catch (error) {
            console.log(error);
        }
    }

    //add new category
    async insertNewCategory(category, description) {
        try {
            const insertId = await new Promise((resolve, reject) => {

                const query = "INSERT INTO product_category (category, description) VALUES (?,?);";

                connection.query(query, [category, description], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });

            console.log("added successfully");

            return {
                id: insertId,
                category: category,
                description: description
            };
        }
        catch (error) {
            console.log(error);
        }
    }

    //delete category by id
    async deleteCategory(id) {
        try {
            id = parseInt(id, 10);

            const response = await new Promise((resolve, reject) => {

                const query = "DELETE FROM product_category WHERE category_id = ?;";

                connection.query(query, [id], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = database;