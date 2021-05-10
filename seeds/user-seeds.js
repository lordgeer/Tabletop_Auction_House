const { User } = require('../models');

const userData = [

  {
    "name": "Thomas",
    "password": "password1234"
  },
  {
    "name": "Elise",
    "password": "password2021"
  },
  {
    "name": "Dana",
    "password": "dana12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
