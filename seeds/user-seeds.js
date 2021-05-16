const { User } = require('../models');

const userData = [];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
