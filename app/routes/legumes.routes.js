const legumes = require("../controllers/legumes.controllers.js");

module.exports = app => {
    var router = require("express").Router();
    router.get("/findAllLegumes", legumes.findAll);
    app.use("/api/aliment", router);
}

