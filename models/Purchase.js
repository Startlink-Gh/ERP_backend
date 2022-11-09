const connection = require('../database');

class Purchase {
  static getPurchaseInstance() {
    return new Purchase();
  }

  async makeNewPurchase(document_no, supplier_id, expected_date, arrived_date, arrived) {
    try {
      let id = parseInt(supplier_id, 10);

      const response = await new Promise((resolve, reject) => {
        const query = `INSERT INTO purchase (document_no, supplier_id, expected_date, arrived,
                     arrived_date) VALUES (?,?,?,?,?);`;

        connection.query(query, [document_no, id, expected_date, arrived, arrived_date], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.insertId);
        });
      });
      console.log('PurchaseId:::> ', response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async addPurchaseLine(purchase_id, purchase_line) {
    try {
      //the for loop failed and only inserts first item in the array
      // for (let i = 0; i < purchase_line.length; i++) {
      //   const response = await new Promise((resolve, reject) => {
      //     const query = `INSERT INTO purchase_line (purchase_id, product_id, quantity, price)
      //                          VALUES (?,?,?,?);`;
      //     connection.query(
      //       query,
      //       [purchase_id, purchase_line[i].product_id, purchase_line[i].quantity, purchase_line[i].price],
      //       (err, result) => {
      //         if (err) reject(new Error(err.message));
      //         resolve(result);
      //       }
      //     );
      //   });

      //   console.log('invoice added successfully!');

      //   return response;
      // }

      const response = await new Promise((resolve, reject) => {
        connection.query(
          `INSERT INTO purchase_line (purchase_id, product_id, product_category, quantity, price) VALUES ?`,
          [
            purchase_line.map((item) => [
              purchase_id,
              parseInt(item.product_id, 10),
              parseInt(item.category, 10),
              parseInt(item.quantity, 10),
              parseInt(item.price, 10),
            ]),
          ],
          (err, result) => {
            console.log(err);
            if (err) reject(new Error(err.message));
            resolve(result);
          }
        );
      });

      console.log('invoice:::> ', response);
    } catch (error) {
      console.log(error);
    }
  }

  async getPurchaseDetails(purchase_id) {
    try {
      purchase_id = parseInt(purchase_id, 10);
      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM `purchase_line` AS PL JOIN purchase AS P ON PL.purchase_id = P.id WHERE P.id = ?;';
        connection.query(query, [purchase_id], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllPurchases(purchase_id) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM purchase';
        connection.query(query, [purchase_id], (err, results) => {
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
