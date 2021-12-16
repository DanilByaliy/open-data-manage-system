const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const ActionType = sequelize.define(
  'actiontype',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.STRING(255),
    },
  },
  {
    sequelize,
    modelName: 'actiontype',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = ActionType;