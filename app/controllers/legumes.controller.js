const db = require("../models/index");
const Legumes = db.legumes;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

    const Legumes = db.legumes;

    Legumes.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Erreur lors de la recherche de tous les légumes."
            });
        });
};

module.exports = exports;
