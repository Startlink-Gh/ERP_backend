const Purchase = require('../models/Purchase');
const db = Purchase.getPurchaseInstance();
const dayjs = require('dayjs');
exports.addPurchase = (req, res) => {
  try {
    // console.log('hiittt!!!!');

    console.log(req.body);

    let { document_no, supplier_id, expected_date, arrived_date, arrived, products: purchase_line } = req.body;

    expected_date = dayjs(expected_date).format('YYYY-MM-DD');
    arrived_date = dayjs(arrived_date).format('YYYY-MM-DD');

    const result = db.makeNewPurchase(document_no, supplier_id, expected_date, arrived_date, arrived);

    result
      .then((purchase_id) =>
        db
          .addPurchaseLine(purchase_id, purchase_line)
          .then((data) =>
            res.status(201).json({
              success: true,
              data,
              message: 'Puchase line Added Successfully!',
            })
          )
          .catch((err) =>
            res.status(500).json({
              success: false,
              error: err,
              message: 'Puchase line Add Failed',
            })
          )
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
          error: err,
          message: 'Puchase Add Failed',
        })
      );
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

exports.getPurchaseDetails = (req, res) => {
  try {
    const { id } = req.body;

    const result = db.getPurchaseDetails(id);
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
    console.log(error);
  }
};
exports.getAllPurchases = (req, res) => {
  try {
    const result = db.getAllPurchases();
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
    console.log(error);
  }
};
