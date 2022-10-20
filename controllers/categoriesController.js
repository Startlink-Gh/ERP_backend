const Categories = require('../models/Categories');
const db = Categories.getCategoriesInstance();

exports.getCategories = (req, res) => {
  try {
    const result = db.getCategories();

    result
      .then((data) => res.status(200).json({ success: true, data }))
      .catch((err) => res.status(500).json({ success: false, error: err }));
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

exports.addCategory = (req, res) => {
  try {
    const { category_name, description } = req.body;
    const result = db.insertNewCategory(category_name, description);

    result
      .then((data) => res.status(201).json({ success: true, data }))
      .catch((err) => res.status(500).json({ success: false, error: err }));
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

exports.deleteCategory = (req, res) => {
  try {
    const { id } = req.params;
    const result = db.deleteCategory(id);

    result
      .then((data) => res.status(200).json({ success: true, data }))
      .catch((err) => res.status(500).json({ success: false, error: err }));
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
