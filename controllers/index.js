const router = require('express').Router();
const apiRoutes = require('./api');
const landingRoutes = require('./landingRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', landingRoutes);
router.use('/api', apiRoutes);
router.use('/home', homeRoutes)
module.exports = router;
