const connection = require('../database');
class Categories {
  static getCategoriesInstance() {
    return new Categories();
  }

  //get all the categories
  async getCategories() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'SELECT * FROM product_category;';

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

  //add new category
  async insertNewCategory(category, description) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = 'INSERT INTO product_category (category, description) VALUES (?,?);';

        connection.query(query, [category, description], (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });

      console.log('added successfully');

      return {
        id: response.insertId,
        category: category,
        description: description,
      };
    } catch (error) {
      console.log(error);
    }
  }

  //delete category by id
  async deleteCategory(id) {
    try {
      id = parseInt(id, 10);

      const response = await new Promise((resolve, reject) => {
        const query = 'DELETE FROM product_category WHERE category_id = ?;';

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

module.exports = Categories;
