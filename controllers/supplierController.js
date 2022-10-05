const Supplier = require('../models/Suppliers');
const db = Supplier.getSupplierInstance();
exports.addSuppliers = (req, res) => {
  try {
    const { name, email, phone, address, city, region, suburb, countryid } =
      req.body;

    const result = db.addNewSupplier(
      name,
      email,
      phone,
      address,
      city,
      region,
      suburb,
      countryid
    );

    result
      .then((data) => res.json({ data: data }))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
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
