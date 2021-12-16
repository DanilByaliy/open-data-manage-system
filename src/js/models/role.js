const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Role = sequelize.define(
  'role',
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
    modelName: 'role',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Role;