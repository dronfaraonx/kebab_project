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

router.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({ where: { email } });
        // const hasSamePassword = await bcrypt.compare(password, findUser.password);
        if(findUser && password == findUser.password) {
            req.session.user_sid = findUser.id;
            res.status(203).json({id: findUser.id});
        } else {
            res.status(401).json({message: 'Incorrect email or password'})
        }
    } catch (error) {
        console.log(('ERROR WHILE LOGIN - ', error));
        res.status(503).json({ message: 'SERVER ERROR' });
    }
  })

module.exports = router;
