const { response } = require('express');
const connection = require('../database');

class Purchase {
    static getPurchaseInstance() {
        return new Purchase();
    }

    async makeNewPurchase(doc_no, supplier_id, expected_date, arrived_date) {
        try {
            const id = parseInt(supplier_id, 10);

            const date = Date.now(expected_date);

            const response = await new Promise((resolve, reject) => {

                const query = `INSERT INTO purchase (document_no, supplier_id, expected_date,
                     arrived_date) VALUES (?,?,?,?);`;

                connection.query(
                    query,
                    [doc_no, id, expected_date, arrived_date],
                    (err, result) => {
                        if (err) reject(new Error(err.message));
                        resolve(result.insertId);
                    }
                )

            });
            console.log(response);
            return response;


        } catch (error) {
            console.log(error);
        }
    }

    // async addPurchaseLine(id, purchase_line) {
    //     try {
    //         await purchase_line.map((item) => {
    //             const response = new Promise((resolve, reject) => {
    //                 const query = `INSERT INTO purchase_line (purchase_id, product_id, quantity,unit_price)
    //            VALUES (?,?,?,?);`;

    //                 connection.query(
    //                     query,
    //                     [id, purchase_line[i].product_id, purchase_line[i].quantity, purchase_line[i].unit_price],
    //                     (err, result) => {
    //                         if (err) reject(new Error(err.message));
    //                         resolve(result);
    //                     }
    //                 )
    //             })
    //         });
    //         console.log("invoice added successfully!");
    //         return response;
    //     } catch (error) {
    //         console.log(error);
    //     }


    // }

    //map() will be implemented later for now this works
    async addPurchaseLine(id, purchase_line) {
        try {
            for (let i = 0; i < purchase_line.length; i++) {
                const response = await new Promise((resolve, reject) => {
                    const query = `INSERT INTO purchase_line (purchase_id, product_id, quantity,unit_price)
                               VALUES (?,?,?,?);`;

                    connection.query(
                        query,
                        [id, purchase_line[i].product_id, purchase_line[i].quantity, purchase_line[i].unit_price],
                        (err, result) => {
                            if (err) reject(new Error(err.message));
                            resolve(result);
                        }
                    )
                })

                console.log("invoice added successfully!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getPurchaseInvoiceDetails(id) {
        try {
            id = parseInt(id, 10);

            const response = await new Promise((resolve, reject) => {
                const query = 'SELECT * FROM `purchase_line` AS PL JOIN purchase AS P ON PL.purchase_id = P.id WHERE P.id = ?;';

                connection.query(query, [id], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                });
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Purchase;