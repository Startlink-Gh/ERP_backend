const Product = require('../models/Productmodel');
const db = Product.getSupplierInstance();

exports.getProducts = (req, res) => {
    try {
        const result = db.getProducts();

        result
            .then((data) =>
                res.status(201).json({
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
        const { category_id, name, description } = req.body;

        const result = db.addNewProduct(category_id, name, description);

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
}