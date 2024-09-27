const router = require("express").Router();
const {Item} = require('../../db/models')

router.put('/:id/order', async (req, res) => {
  const {id} = req.params
  const {buyer_id} = req.body
  try {
    const item = await Item.update({buyer_id, is_paid:true}, {where: {id}})
    res.status(200).json({message: "The food has been ordered"})
  } catch (error) {
    sendStatus(500).json({message: 'Failed to order'})
  }
});

module.exports = router;
