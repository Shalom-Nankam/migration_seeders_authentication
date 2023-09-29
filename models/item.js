const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const Category = require("./categories");

const Item = sequelize.define(
  "items",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
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
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    underscored: true,
    tableName: "items",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

Category.hasMany(Item);
Item.belongsTo(Category, {
  foreignKey: "category_id",
});

module.exports = Item;
