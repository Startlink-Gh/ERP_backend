const database = require('../database');

exports.getCategories = (req, res) => {
    const db = database.getDatabaseInstance();

    const result = db.getCategories();

    result
        .then(data => res.json({ data: data }))
        .catch(err => console.log(err));

};

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

exports.deleteCategory = (req, res) => {
    try {
        const { id } = req.params;

        const db = database.getDatabaseInstance();

        const result = db.deleteCategory(id);

        result
            .then(data => res.json({ success: true }))
            .catch(err => console.log(err));

    } catch (error) {
        console.log(error);
    }
}