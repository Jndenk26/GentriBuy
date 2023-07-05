const router = require('express').Router();
const { Items, User, Funds } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res)=> {
  res.status(200).render('landing')
})

router.get('/home',withAuth, async (req, res) => {
  try{
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Items },
                { model: Funds}
      ],
    });
    
    const user = userData.get({ plain: true });


      res.status(200).render('home', { 
        ...user,
        logged_in: true
      });

  } catch(err) {
      res.status(400).json(err);
  }
})


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {

    res.render('signup');
  });
  
  module.exports = router;