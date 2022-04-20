const { Sequelize } = require("sequelize");

// Need to be moved into config file
module.exports = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/db"
);
