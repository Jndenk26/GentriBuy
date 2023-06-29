// Starting point for folder

const router = require('express').Router();
const apiRoutes = require('./api');
const test = require('./test');
const userRoutes = require('./api/userRoutes');
const projectRoutes = require('./api/projectRoutes');
const fundsRoutes = require('./api/fundsRoutes');
const itemRoutes = require('./api/itemsController');
const pledgeRoutes = require('./api/pledgesController')

router.use('/users', userRoutes);
router.use('/funds',fundsRoutes)
router.use('/projects', projectRoutes);
router.use('/items', itemRoutes);
router.use('/pledges', pledgeRoutes);

router.use('/', test);
router.use('/api', apiRoutes);



module.exports = router;
