module.exports = (sequelize, Sequelize) => {
    let Legumes;
    Legumes = sequelize.define("legumes", {
        nom: {
            type: Sequelize.STRING
        },
        calories: {
            type: Sequelize.STRING
        }
    });
    return Legumes;
};