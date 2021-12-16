const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Category = sequelize.define(
  'category',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'category',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Category;