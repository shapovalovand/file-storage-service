const connection = require("../../Server/db/connection");
const { DataTypes, Model } = require("sequelize");

class FileModel extends Model {}

FileModel.init(
  {
    filename: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "files",
  }
);

// We shouldn't use this trick for production purpose. We need migrations
(async () => {
  connection.sync({ force: true });
})();
module.exports = FileModel;
