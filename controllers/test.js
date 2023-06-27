const router = require('express').Router();

router.get('/', async (req, res) =>{
    res.render('all');
  });

  module.exports = router;