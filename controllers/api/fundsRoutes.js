const router = require('express').Router();
const { Funds, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try{
        const fundsData = await Funds.findAll({
            include:[
                {
                model: User,
                attributes:{exclude: ['password']}
                }
            ]
        })
        
        const funds = fundsData.map((fund) => fund.get({ plain: true }));

        res.status(200).json(funds)
    } catch(err) {
        res.status(400).json(err);
    }
})

router.post('/',withAuth, async (req, res) => {
    try {
      const newFunds = await Funds.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newFunds);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/:id',withAuth, async (req,res)=>{
    try{
      const updatedFunds = await Funds.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      })
      if(!updatedFunds[0]) {
        res.status(404).json({ message: 'No Funds with this ID!'})
      }
  
      res.status(200).json(updatedFunds)
    }catch (err) {
      res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
      const fundsData = await Funds.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!fundsData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }

      res.status(200).json(fundsData);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;