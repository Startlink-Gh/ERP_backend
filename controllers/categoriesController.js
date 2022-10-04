const database = require('../database');

exports.addCategory = (req, res) => {
    try {
        const { category, description } = req.body;

        const db = database.getDatabaseInstance();

        const result = db.insertNewCategory(category, description);

        result
            .then(data => res.json({ data: data }))
            .catch(err => console.log(err));
    } catch (error) {
        console.log(error);
    }
};