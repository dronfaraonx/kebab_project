const router = require('express').Router();

const { User, Item } = require('../../db/models')

router.get('/', async(req, res) => {
  try {
    const allItems = await Item.findAll()
    res.json(allItems)
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'CANNOT GET ALL ITEMS'})
  }
})

module.exports = router;
