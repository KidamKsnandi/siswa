"use strict";
const { Model } = require("sequelize");
const User = require("../models/user");
module.exports = (sequelize, DataTypes) => {
  class Buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Buku.belongsTo(models.User, { foreignKey: "idUser", onDelete: "RESTRICT" });
    }
  }
  Buku.init(
    {
      idUser: DataTypes.INTEGER,
      name: DataTypes.STRING,
      stok: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Buku",
    }
  );

  return Buku;
};
