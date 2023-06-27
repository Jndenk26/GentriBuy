const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Pledges extends Model {}

Pledges.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    money: {
      type: DataTypes.FLOAT(1000,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    item_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'items',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pledges',
  }
);

module.exports = Pledges;