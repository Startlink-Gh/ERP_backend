const connection = require('../database');

class Supplier {
  static getSupplierInstance() {
    return new Supplier();
  }
  async getSuppliers() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM supplier WHERE deleted=?;';

        connection.query(query, [0], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      return response;
    } catch (error) {}
  }

  async getSupplierDetails(id) {
    try {
      id = parseInt(id, 10);

      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM supplier WHERE supplier_id = ?;';

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

  async addNewSupplier(name, email, phone, address, city, region, suburb, country) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          'INSERT INTO supplier (supplier_name, supplier_email, supplier_phone, address_line, city, region, suburb, country) VALUES (?,?,?,?,?,?,?,?);';

        connection.query(query, [name, email, phone, address, city, region, suburb, country], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result);
        });
      });

      if (response.affectedRows)
        return {
          id: response.insertId,
          supplier_name: name,
        };
    } catch (error) {
      console.log(error);
    }
  }

  async updateSupplierDetails(supplier_id, email, phone) {
    try {
      const id = parseInt(supplier_id, 10);

      const response = await new Promise((resolve, reject) => {
        const query = 'UPDATE supplier SET supplier_email = ?, supplier_phone = ? WHERE supplier_id = ?;';

        connection.query(query, [email, phone, id], (err, result) => {
          if (err) reject(new Error(err.message));
          resolve(result);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteSupplier(supplier_id) {
    try {
      supplier_id = parseInt(supplier_id, 10);
      const response = await new Promise((resolve, reject) => {
        const query = 'UPDATE supplier SET deleted = true WHERE supplier_id = ?;';
        connection.query(query, [supplier_id], (err, results) => {
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

module.exports = Supplier;
