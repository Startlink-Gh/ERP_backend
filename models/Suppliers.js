const connection = require('../database');

class Supplier {
  static getSupplierInstance() {
    return new Supplier();
  }
  async getSuppliers() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM supplier;';

        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {}
  }

  async addNewSupplier(
    name,
    email,
    phone,
    address,
    city,
    region,
    suburb,
    countryid
  ) {
    try {
      const id = parseInt(countryid, 10);

      const insertId = await new Promise((resolve, reject) => {
        const query =
          'INSERT INTO supplier (supplier_name, supplier_email, supplier_phone, address_line, city, region, suburb, country_id) VALUES (?,?,?,?,?,?,?,?);';

        connection.query(
          query,
          [name, email, phone, address, city, region, suburb, id],
          (err, result) => {
            if (err) reject(new Error(err.message));
            resolve(result.insertId);
          }
        );
      });
      return;
    } catch (error) {
      console.log(error);
    }
  }

  async updateSupplierDetails(supplier_id, email, phone) {
    try {
      const id = parseInt(supplier_id, 10);

      const response = await new Promise((resolve, reject) => {
        const query =
          'UPDATE supplier SET supplier_email = ?, supplier_phone = ? WHERE supplier_id = ?;';

        connection.query(query, [email, phone, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result.affectedRows);
        });
      });
      return console.log(response + 'updated successfully!');
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Supplier;
