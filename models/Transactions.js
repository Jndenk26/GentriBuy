const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Transactions extends Model {}

Transactions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    startCapital: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    difference: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    endCapital: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'transactions',
  }
);

module.exports = Transactions;