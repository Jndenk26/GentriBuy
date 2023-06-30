const router = require('express').Router();
const { Items, User } = require('../models');
// router.get('/', async (req, res) =>{
//     res.render('home');
//   });

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

      res.status(200).render('home', { items });

  } catch(err) {
      res.status(400).json(err);
  }
})


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  module.exports = router;