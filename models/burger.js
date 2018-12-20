var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var burger = sequelize.define("burger" {
    burger_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false
    }
});

module.exports = burger;