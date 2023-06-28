const sequelize = require('../config/connection');
const { User, Items, Pledges } = require('../models');

const userData = require('./userData.json');
const itemData = require('./itemData.json');
const pledgeData = require('./pledgeData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
console.log('-----------USERS SEEDED-----------');

await Items.bulkCreate(itemData);
console.log('-----------ITEMS SEEDED-----------');

await Pledges.bulkCreate(pledgeData);
console.log('-----------PLEDGES SEEDED-----------');
  process.exit(0);
};

seedDatabase();
