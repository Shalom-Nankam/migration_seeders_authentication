const db = require("./db/config");
const ItemModel = require("./models/item");
const UserModel = require("./models/user");

db.connect()
  .then(async () => {
    await UserModel.insertMany([
      {
        _id: 1,
        first_name: "Bola",
        last_name: "Ahmed",
        email: "bolaahmed@gmail.com",
        password: "Welcomebola",
        role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await ItemModel.insertMany([
      {
        _id: 1,
        name: "HP Spectre",
        size: "Medium",
        price: 150000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        _id: 2,
        name: "Dell Latitude",
        size: "Medium",
        price: 200000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        _id: 3,
        name: "Lenovo Thinkpad",
        size: "Medium",
        price: 170000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        _id: 4,
        name: "External Hard Drive",
        size: "Small",
        price: 30000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
      },
      {
        _id: 5,
        name: "Wireless Mouse",
        size: "Small",
        price: 8000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
      },
      {
        _id: 6,
        name: "Laptop Charger",
        size: "Medium",
        price: 10000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
      },
      {
        _id: 7,
        name: "Nike Air Force",
        size: "Large",
        price: 25000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
      },
      {
        _id: 8,
        name: "Balenciaga Red Bottoms",
        size: "Large",
        price: 40000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
      },
      {
        _id: 9,
        name: "Adidas Runners",
        size: "Medium",
        price: 25000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
      },
      {
        _id: 10,
        name: "Dudu Osun Black soap",
        size: "Medium",
        price: 1000,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4,
      },
    ]);
  })
  .catch((err) => {
    console.log({
      message: "==================> error seeding data",
      err,
    });
  });
