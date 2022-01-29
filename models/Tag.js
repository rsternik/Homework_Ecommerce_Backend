// Required Sequelize model
const { Model, DataTypes } = require('sequelize');

// Database Connection
const sequelize = require('../config/connection.js');

// Init Tag model and extend Model
class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//export Tag
module.exports = Tag;