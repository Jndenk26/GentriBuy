const User = require('./User');
const Funds = require('./Funds');
const Items = require('./items');
const Pledges = require('./pledges');
// User to items
User.hasMany(Items, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Items.belongsTo(User, {
  foreignKey: 'user_id'
});
//----------

//user to pledges
User.hasMany(Pledges, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Pledges.belongsTo(User, {
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

//items to pledges
Items.hasOne(Pledges, {
  foreignKey: 'item_id',
  onDelete: 'CASCADE'
})

Pledges.belongsTo(Items, {
  foreignKey: 'item_id'
})
//----------

module.exports = { User, Funds, Items, Pledges };
