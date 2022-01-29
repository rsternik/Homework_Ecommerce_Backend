// Express Router
const router = require('express').Router();

// Defined routes and required files
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use Routes for each route
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Router Export
module.exports = router;
