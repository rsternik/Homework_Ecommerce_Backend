// Required sequalize module
const { Model, DataTypes } = require('sequelize');

// Required connection file
const sequelize = require('../config/connection.js');

// Category creation 
class Category extends Model {}

// Category model for db column params
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

//export Category
module.exports = Category;