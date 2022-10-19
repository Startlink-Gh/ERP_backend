const Product = require('../models/Product');
const db = Product.getProductInstance();

exports.getProducts = (req, res) => {
  try {
    const result = db.getProducts();

    result
      .then((data) =>
        res.status(200).json({
          success: true,
          data,
        })
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
          error: err,
        })
      );
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.addNewProduct = (req, res) => {
  try {
    // console.log('Body--->>', req.body);
    const { category_id, product_name, description } = req.body;

    const result = db.addNewProduct(category_id, product_name, description);

    result
      .then((data) =>
        res.status(201).json({
          sucess: true,
          data,
        })
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
          error: err,
        })
      );
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteProduct = (req, res) => {
  try {
    const { product_id } = req.body;

    const result = db.deleteProduct(product_id);
    result
      .then((data) =>
        res.status(200).json({
          sucess: true,
          data,
        })
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
          error: err,
        })
      );
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
