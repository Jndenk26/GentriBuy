const router = require('express').Router();
const { Items, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try{
        const itemsData = await Items.findAll({
            include:[
                {
                model: User,
                attributes:{exclude: ['password']}
                }
            ]
        })
        
        const items = itemsData.map((items) => items.get({ plain: true }));

        res.status(200).json('items');

    } catch(err) {
        res.status(400).json(err);
    }
})

router.post('/',withAuth, async (req, res) => {
    try {
      const newItems = await Items.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newItems);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/:id',withAuth, async (req,res)=>{
    try{
      const updatedItems = await Items.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      })
      if(!updatedItems[0]) {
        res.status(404).json({ message: 'No Funds with this ID!'})
      }
  
      res.status(200).json(updatedItems)
    }catch (err) {
      res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
      const itemsData = await Items.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!itemsData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }

      res.status(200).json(itemsData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;