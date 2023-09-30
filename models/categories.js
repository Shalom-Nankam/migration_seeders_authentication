const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    name: {
      type: String,
      allowNull: false,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const CategoryModel = mongoose.model("category");

module.exports = CategoryModel;
