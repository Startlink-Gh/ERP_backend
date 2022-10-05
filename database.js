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

class supplier {
    static getDatabaseInstance() {
        return instance ? instance : new supplier();
    }
    async getSuppliers() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM supplier;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            return response;
        }
        catch (error) {

        }
    }

    async addNewSupplier(name, email, phone, address, city, region, suburb, countryid) {
        try {
            const id = parseInt(countryid, 10);

            const insertId = await new Promise((resolve, reject) => {

                const query = "INSERT INTO supplier (supplier_name, supplier_email, supplier_phone, address_line, city, region, suburb, country_id) VALUES (?,?,?,?,?,?,?,?);";

                connection.query(query, [name, email, phone, address, city, region, suburb, id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            return;
        }
        catch (error) {
            console.log(error);
        }
    }
}

module.exports = supplier;