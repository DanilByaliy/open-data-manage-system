const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const State = sequelize.define(
  'state',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'state',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = State;