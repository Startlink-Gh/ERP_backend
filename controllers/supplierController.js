const database = require('../database');

exports.addSuppliers = (req, res) => {
    try {
        const { name, email, phone, address, city, region, suburb, countryid } = req.body;

        const db = database.getDatabaseInstance();

        const result = db.addNewSupplier(name, email, phone, address, city, region, suburb, countryid);

        result
            .then(data => res.json({ data: data }))
            .catch(err => console.log(err));

    } catch (error) {
        console.log(error);
    }
}