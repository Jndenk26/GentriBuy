const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Items extends Model {}

Items.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT(100,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'items',
  }
);

module.exports = Items;