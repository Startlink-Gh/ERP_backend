const Purchase = require('../models/Purchase');
const db = Purchase.getPurchaseInstance();

exports.addPurchase = (req, res) => {
    try {
        const { doc_no, supplier_id, expected_date, arrived_date, purchase_line } = req.body;

        const result = db.makeNewPurchase(doc_no, supplier_id, expected_date, arrived_date);

        // console.log(result);

        result
            .then((result) =>
                db.addPurchaseLine(result, purchase_line)
                    .then((data) =>
                        res.status(201).json({
                            works: true,
                            data
                        })
                    ).catch((err) =>
                        res.status(500).json({
                            success: false,
                            error: "errorroror",
                        }))
            )
            .catch((err) =>
                res.status(500).json({
                    success: false,
                    error: "errrrrr",
                }));

    } catch (error) {
        return res.status(500).json({ success: false, error: "jokokokok" });
    }
}

exports.getPurchaseInvoicesDetails = (req, res) => {
    try {
        const { id } = req.body;

        const result = db.getPurchaseInvoiceDetails(id);
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
}