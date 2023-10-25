const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint. 

router.get('/', async (req, res) => {
  // find all categories and include its associated Products.
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value and include its associated Products.
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const result = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const result = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
