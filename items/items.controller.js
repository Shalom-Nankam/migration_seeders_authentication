const Items = require("../models/item");
const GetAllItems = async (req, res) => {
  const items = await Items.findAll();
  res.status(200).json({
    message: "Items retrieved",
    data: items,
  });
};

module.exports = {
  GetAllItems,
};
