const sequelize = require('../config/connection');
const { User, Items } = require('../models');

const userData = require('./userData.json');
const itemData = require('./');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
console.log('-------------USERS SEEDED-------------');

await Items.bulkCreate(itemData);
console.log('-------------ITEMS SEEDED-------------');

  process.exit(0);
};

seedDatabase();
