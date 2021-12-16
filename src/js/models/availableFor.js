const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const AvailableFor = sequelize.define(
  'availablefor',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'type',
        key: 'id',
      },
    },
    metaDataKey: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'metadatakey',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'availablefor',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = AvailableFor;