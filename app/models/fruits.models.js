module.exports = (sequelize, Sequelize) => {
    let Fruits;
    Fruits = sequelize.define("fruits", {
        nom: {
            type: Sequelize.STRING
        },
        calories: {
            type: Sequelize.STRING
        }
    });
    return Fruits;
};