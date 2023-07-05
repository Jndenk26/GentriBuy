const User = require('./User');
const Funds = require('./Funds');
const Items = require('./items');
const Transactions = require('./Transactions');

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

//user to transactions
User.hasMany(Transactions, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Transactions.belongsTo(User, {
  foreignKey: 'user_id'
})
module.exports = { User, Funds, Items, Transactions };
