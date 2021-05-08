const { Tag } = require('../models');

const storeData = [
  {
    store_name: 'd&d',
  },
  {
    store_name: 'starwars',
  },
  {
    store_name: 'pathfinder',
  },
  {
    store_name: 'vampire',
  },
];

const seedTags = () => Tag.bulkCreate(storeData);

module.exports = seedTags;




