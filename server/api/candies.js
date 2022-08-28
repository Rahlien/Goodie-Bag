const router = require('express').Router();
const { Candy } = require('../db').models;

// GET /api/candies
router.get('/', async (req, res, next) => {
  try {
    res.send(await Candy.findAll());
  } catch (error) {
    next(error);
  }
});

// GET /api/candies/:id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Candy.findByPk(req.params.id));
  } catch (error) {
    next(error);
  }
});

// POST /api/candies
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Candy.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/candies/:id
router.put('/:id', async (req, res, next) => {
  try {
    const todo = await Candy.findByPk(req.params.id);
    res.send(await todo.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/candies/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const todo = await Candy.findByPk(req.params.id);
    await todo.destroy();
    res.send(todo);
  } catch (error) {
    next(error);
  }
});

module.exports = router;