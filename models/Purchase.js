const connection = require('../database');

class Purchase {
  static getPurchaseInstance() {
    return new Purchase();
  }

  async makeNewPurchase(doc_no, supplier_id, expected_date, arrived_date) {
    try {
      const id = parseInt(supplier_id, 10);

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
        );
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async addPurchaseLine(id, purchase_line) {
    try {
      for (let i = 0; i < purchase_line.length; i++) {
        const response = await new Promise((resolve, reject) => {
          const query = `INSERT INTO purchase_line (purchase_id, product_id, quantity,unit_price)
                               VALUES (?,?,?,?);`;

          connection.query(
            query,
            [
              id,
              purchase_line[i].product_id,
              purchase_line[i].quantity,
              purchase_line[i].unit_price,
            ],
            (err, result) => {
              if (err) reject(new Error(err.message));
              resolve(result);
            }
          );
        });

        console.log('invoice added successfully!');
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Purchase;
