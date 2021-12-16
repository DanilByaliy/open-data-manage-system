const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const MetadataValue = sequelize.define(
  'metadatavalue',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING(255),
    },
    metadataKey: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'metadatakey',
        key: 'id',
      },
    },
    dataset: {
      type: DataTypes.INTEGER,
      references: {
        model: 'dataset',
        key: 'id',
      },
    },
    category: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    dataFile: {
      type: DataTypes.INTEGER,
      references: {
        model: 'datafile',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'metadatavalue',
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = MetadataValue;