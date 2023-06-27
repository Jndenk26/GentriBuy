const router = require('express').Router();
const apiRoutes = require('./api');
const test = require('./test');

router.use('/', test);
router.use('/api', apiRoutes);

module.exports = router;
