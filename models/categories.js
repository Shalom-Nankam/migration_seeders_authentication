const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Category = sequelize.define(
  "categories",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: "categories",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Category;
