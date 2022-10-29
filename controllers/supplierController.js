const Supplier = require('../models/Supplier');
const db = Supplier.getSupplierInstance();

exports.addSupplier = (req, res) => {
  console.log(req.body);
  try {
    const { name, email, phone, address, city, region, suburb, country } = req.body;

    const result = db.addNewSupplier(name, email, phone, address, city, region, suburb, country);

    result
      .then((data) => res.status(201).json({ success: true, data: data }))
      .catch((err) => res.status(500).json({ success: false, error: err }));
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.getSuppliers = (req, res) => {
  try {
    const result = db.getSuppliers();

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

exports.getSupplierDetails = (req, res) => {
  try {
    const { id } = req.body;

    const result = db.getSupplierDetails(id);

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

//we only need to update email and phone for now
exports.updateSupplierDetails = (req, res) => {
  try {
    const { supplier_id, email, phone } = req.body;

    const result = db.updateSupplierDetails(supplier_id, email, phone);

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

exports.deleteSupplier = (req, res) => {
  try {
    const { id } = req.params;
    const result = db.deleteSupplier(id);
    result
      .then((data) => res.status(200).json({ success: true, data }))
      .catch((err) => res.status(500).json({ success: false, error: err }));
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
