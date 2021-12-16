const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Action = sequelize.define(
  'action',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    at: {
      type: DataTypes.DATE,
    },
    state: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'state',
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
    grant: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'grant',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'action',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Action;