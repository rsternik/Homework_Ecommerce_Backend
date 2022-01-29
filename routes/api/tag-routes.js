// Express Router
const router = require('express').Router();
// Required Models
const { Tag, Product, ProductTag } = require('../../models');

// Get route for Tags
router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get route to find tag by id
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagIdData = await Tag.findByPk(req.params.id, {

      include: [{ model: Product, through: ProductTag }],
    });

    if (!tagIdData) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }

    res.status(200).json(tagIdData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new Tag
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updagte Tag by id
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'Category not found.' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete tag by id
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'Product not found.' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Router Export
module.exports = router;
