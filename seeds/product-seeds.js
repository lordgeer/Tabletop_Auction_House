const { Product } = require('../models');

const productData = [
  {
    product_name: 'Longsword',
    category_name: 'Weapons'
    store_name: 'd&d'
    price: 10,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Hooded Cloak',
    category_name: 'Clothing'
    store_name: 'pathfinder'
    price: 10,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: 'Horse',
    category_name: 'Vehicles'
    store_name: 'd&d'
    price: 10,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: 'Blaster',
    category_name: 'Weapons'
    store_name: 'starwars'
    price: 10,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Speeder',
    category_name: 'Vehicles'
    store_name: 'starwars'
    price: 10,
    stock: 10,
    category_id: 8,
  },
  {
    product_name: 'Dagger',
    category_name: 'Weapons'
    store_name: 'vampire'
    price: 10,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Poet Shirt',
    category_name: 'Clothing'
    store_name: 'vampire'
    price: 10,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: 'Grimoire',
    category_name: 'Collectibles'
    store_name: 'pathfinder'
    price: 10,
    stock: 10,
    category_id: 7,
  },
  {
    product_name: 'Tent',
    category_name: 'Utility'
    store_name: 'd&d'
    price: 10,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Plate Mail',
    category_name: 'Armor'
    store_name: 'pathfinder'
    price: 10,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: 'Raven',
    category_name: 'Companions'
    store_name: 'vampire'
    price: 10,
    stock: 10,
    category_id: 6,
  },
  {
    product_name: 'Lockpick (electronic)',
    category_name: 'Technology'
    store_name: 'starwars'
    price: 10,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: 'Droid (R2)',
    category_name: 'Companions'
    store_name: 'starwars'
    price: 10,
    stock: 10,
    category_id: 6,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;





