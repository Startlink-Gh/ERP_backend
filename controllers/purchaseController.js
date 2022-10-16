const Purchase = require('../models/Purchase');
const db = Purchase.getPurchaseInstance();

exports.addPurchase = (req, res) => {
  try {
    const { doc_no, supplier_id, expected_date, arrived_date, purchase_line } = req.body;

    purchase_line.map((item) => {
      console.log(item.product_id);
    });

    const result = db.makeNewPurchase(doc_no, supplier_id, expected_date, arrived_date);

    result
      .then((result) =>
        db
          .addPurchaseLine(result, purchase_line)
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
          )
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
          error: err,
        })
      );
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
