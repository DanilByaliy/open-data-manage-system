const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Type = sequelize.define(
  'type',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING(45),
    },
  },
  {
    sequelize,
    modelName: 'type',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Type;