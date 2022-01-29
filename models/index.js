// Required Models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Category with many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// belongsToMany tag via ProductTag
Product.belongsToMany(Tag, {
  // Foreign Key
  through: ProductTag,
  foreignKey: 'product_id'
});

// belongsToMany Product via ProductTag
Tag.belongsToMany(Product, {
  // Foreign Key
  through: ProductTag,
  foreignKey: 'tag_id'
});

//export Models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
