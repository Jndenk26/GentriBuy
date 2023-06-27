const User = require('./User');
const Funds = require('./Funds');
const Items = require('./items');
const Pledges = require('./pledges');

User.hasMany(Items, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Items.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Pledges, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Pledges.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(Funds, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Funds.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Funds, Items, Pledges };
