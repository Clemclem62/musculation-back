const fruits = require("../controllers/fruits.controllers.js");

module.exports = app => {
    var router = require("express").Router();
    router.get("/findAllFruit", fruits.findAll);
    app.use("/api/aliment", router);
}

