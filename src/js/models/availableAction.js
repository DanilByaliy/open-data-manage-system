const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const AvailableAction = sequelize.define(
  'availableaction',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    role: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'role',
        key: 'id',
      },
    },
    actionType: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'actiontype',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'availableaction',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = AvailableAction;