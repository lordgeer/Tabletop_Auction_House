const { User } = require('../models');

const userData = [

  {
    "name": "Thomas",
    "password": "password1234"
  },
  {
    "name": "Elise",
    "password": "password1234"
  },
  {
    "name": "Dana",
    "password": "password1234"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
