const router = require('express').Router();
const { Items, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/items',withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Items }],
          });
      
          const user = userData.get({ plain: true });
      console.log(user)
        res.status(200).render('items', { ...user });

    } catch(err) {
        res.status(400).json(err);
    }
})


  module.exports = router;