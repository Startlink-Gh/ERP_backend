const Categories = require('../models/Categories');
const db = Categories.getCategoriesInstance();

exports.getCategories = (req, res) => {
  const result = db.getCategories();
  result
    .then((data) => res.json({ data: data }))
    .catch((err) => console.log(err));
};

exports.addCategory = (req, res) => {
  try {
    const { category, description } = req.body;

    const result = db.insertNewCategory(category, description);

    result
      .then((data) => res.json({ data: data }))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCategory = (req, res) => {
  try {
    const { id } = req.params;
    const result = db.deleteCategory(id);
    result
      .then((data) => res.json({ success: true }))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
