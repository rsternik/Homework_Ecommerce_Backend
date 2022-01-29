//  Expres Router
const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {

  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// get route for specific id request
router.get('/:id', async (req, res) => {

  // find one category by its `id` value
  try {
    const categoryIdData = await Category.findByPk(req.params.id, {

      include: [{ model: Product }],
    });

    if (!categoryIdData) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }

    res.status(200).json(singleCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// Post route to create new category
router.post('/', async (req, res) => {

  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});

// Post route to update category by id
router.put('/:id', async (req, res) => {

  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'This id does not match any category.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Category by id
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'This id does not match any category.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// Router Export
module.exports = router;