const router = require('express').Router();
const { Items, User, Funds } = require('../models');
const withAuth = require('../utils/auth');


router.get('/items',withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Items },
                      { model: Funds }
            ],
          });
      
        const user = userData.get({ plain: true });

        res.status(200).render('items', { ...user });

    } catch(err) {
        res.status(400).json(err);
    }
})

router.get('/item/:id',withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Items,
                        where: {id: req.params.id} },
                      { model: Funds }
            ],
        })

        const user = userData.get({plain: true});
        
        res.render('item', {
            ...user
        })
    } catch(err) {
        res.status(400).json(err);
    }
})

router.get('/addItem',withAuth, async (req, res) => {
    res.status(200).render('addItem')
})

  module.exports = router;