const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const userItems = require('./profileRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/home', userItems)
module.exports = router;
