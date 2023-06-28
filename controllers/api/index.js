const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fundsRoutes = require('./fundsRoutes');
const pledgesRoutes = require('./pledgesRoutes');
const itemRoutes = require('./itemRoutes');


router.use('/users', userRoutes);
router.use('/funds',fundsRoutes)
router.use('/pledges',pledgesRoutes)
router.use('/items', itemRoutes)

module.exports = router;
