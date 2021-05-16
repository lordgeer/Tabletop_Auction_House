const { Category } = require('../models');

// Category seeds
const categoryData = [
  {
    category_name: "Weapons",
  },
  {
    category_name: "Armor",
  },
  {
    category_name: "Utility",
  },
  {
    category_name: "Technology",
  },
  {
    category_name: "Companions",
  },
  {
    category_name: "Droids",
  },
  {
    category_name: "Magic Items",
  },
  {
    category_name: "Vehicles",
  },
  {
    category_name: "Mounts",
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;


