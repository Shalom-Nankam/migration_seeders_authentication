const express = require("express");
const itemsRouter = require("./items/items.router");
const authRouter = require("./auth/auth_router").router;
const passport = require("passport");
require("./auth/passport_config")(passport);
const sequelize = require("./config/sequelize");
const Item = require("./models/item");
const Category = require("./models/categories");
const User = require("./models/user");

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(passport.initialize());

app.use(
  "/items",
  passport.authenticate("jwt", { session: false }),
  itemsRouter
);

app.use("/auth", authRouter);

app.get("/", async (req, res) => {
  const items = await User.findAll();
  return res.status(200).json({
    message: "Items retrieved successfully",
    data: items,
  });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("============> connected to db successfully");
  })
  .catch((err) => {
    console.log(`===================> error connecting to the db : ${err}`);
  });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("=================> synced database");
  })
  .catch((err) => {
    console.log(`===================> error syncing the db : ${err}`);
  });

app.listen(PORT, () => {
  console.log("Server started successfully");
});
