const router = require("express").Router();
const {Item} = require('../../db/models')

router.put('/:id/order', async (req, res) => {
  const {id} = req.params
  const {buyer_id} = req.body
  // console.log(buyer_id);
  try {
    const item = await Item.update({buyer_id, is_paid:true}, {where: {id}})
    res.status(200).json({message: "The food has been ordered"})
  } catch (error) {
    sendStatus(500).json({message: 'Failed to order'})
  }
});

router.post('/newOrder', async (req, res) => {
  try {
    const {
      name, image, original_price, discount, location, seller_id
    } = req.body;
    const parsedOriginalPrice = parseFloat(original_price);
    const parsedDiscount = parseFloat(discount) || 0;
    // const seller_id = req.session.user_sid.id;
    // console.log('THIS SELLER_ID', req.session.user_sid.id);
    const myPost = await Item.create({
      name,
      image,
      original_price: parsedOriginalPrice,
      discount: parsedDiscount,
      location,
      seller_id,
    });
    res.status(201).json({ text: 'Ok' });
  } catch (error) {
    console.log('ERROR WHILE ADDING ORDER: ', error);
    res.status(530).json({ message: 'SOMETHING WENT WRONG AND UNABLE TO ADD ORDER' });
    // res.sendStatus(530);
  }
});

module.exports = router;
