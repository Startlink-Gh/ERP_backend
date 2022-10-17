const connection = require('../database');

class Products {

    static getSupplierInstance() {
        return new Products();
    }

    async getSingleProduct(product_id) {
        try {
            console.log(product_id);

            const id = parseInt(product_id, 10);

            console.log(id);

            const response = await new Promise((resolve, reject) => {
                const query = 'SELECT * FROM product WHERE product_id =?;';

                connection.query(query, [id], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });
            return response;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    async getProducts() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = 'SELECT * FROM product;';

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async addNewProduct(category_id, name, description) {
        try {
            const id = parseInt(category_id, 10);

            const insertId = await new Promise((resolve, reject) => {

                const query = "INSERT INTO product (category_id, product_name, description) VALUES (?,?,?);";

                connection.query(
                    query,
                    [id, name, description],
                    (err, result) => {
                        if (err) reject(new Error(err.message));
                        resolve(result);
                    });
            });
            console.log('added successfully');

            return {
                id: insertId,
                name: name,
                description: description,
            };

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Products;