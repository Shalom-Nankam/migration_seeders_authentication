"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "items",
      [
        {
          id: 1,
          name: "HP Spectre",
          size: "Medium",
          price: 150000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
        {
          id: 2,
          name: "Dell Latitude",
          size: "Medium",
          price: 200000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
        {
          id: 3,
          name: "Lenovo Thinkpad",
          size: "Medium",
          price: 170000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
        {
          id: 4,
          name: "External Hard Drive",
          size: "Small",
          price: 30000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          id: 5,
          name: "Wireless Mouse",
          size: "Small",
          price: 8000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          id: 6,
          name: "Laptop Charger",
          size: "Medium",
          price: 10000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          id: 7,
          name: "Nike Air Force",
          size: "Large",
          price: 25000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          id: 8,
          name: "Balenciaga Red Bottoms",
          size: "Large",
          price: 40000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          id: 9,
          name: "Adidas Runners",
          size: "Medium",
          price: 25000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          id: 10,
          name: "Dudu Osun Black soap",
          size: "Medium",
          price: 1000,
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("items", null, {});
  },
};
