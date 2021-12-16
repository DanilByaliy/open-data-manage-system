const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Dataset = sequelize.define(
  'dataset',
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
    modelName: 'dataset',
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = Dataset;