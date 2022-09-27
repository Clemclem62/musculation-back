const db = require("../models/index");
const Fruits = db.fruits;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    const Fruits = db.fruits;

    Fruits.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

module.exports = exports;
