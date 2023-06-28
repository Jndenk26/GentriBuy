const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fundsRoutes = require('./fundsRoutes');
const pledgesRoutes = require('./pledgesRoutes');

router.use('/users', userRoutes);
router.use('/funds',fundsRoutes)
router.use('/pledges',pledgesRoutes)

module.exports = router;
