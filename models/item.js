const mongoose = require("mongoose");
const shortid = require("shortid");

const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
      allowNull: false,
    },
    name: {
      type: String,
      allowNull: false,
      required: true,
    },
    size: {
      type: String,
      allowNull: false,
      required: true,
    },
    price: {
      type: BigInt,
      required: true,
      allowNull: false,
    },
    category_id: {
      type: BigInt,
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

const ItemModel = mongoose.model("item", ItemSchema);
module.exports = ItemModel;
