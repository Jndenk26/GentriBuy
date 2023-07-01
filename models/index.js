const User = require('./User');
const Funds = require('./Funds');
const Items = require('./items');

// User to items
User.hasMany(Items, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Items.belongsTo(User, {
  foreignKey: 'user_id'
});
//----------

//user to funds
User.hasOne(Funds, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Funds.belongsTo(User, {
  foreignKey: 'user_id'
});
//----------

module.exports = { User, Funds, Items };
