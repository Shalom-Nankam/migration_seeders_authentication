const ItemModel = require("../models/item");
const GetAllItems = async (req, res) => {
  const items = await ItemModel.find();
  res.status(200).json({
    message: "Items retrieved",
    data: items,
  });
};

module.exports = {
  GetAllItems,
};
