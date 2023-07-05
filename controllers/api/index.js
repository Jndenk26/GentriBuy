const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fundsRoutes = require('./fundsRoutes');
const itemRoutes = require('./itemRoutes');
const transactionsRoutes = require('./transactionsRoutes');


router.use('/users', userRoutes);
router.use('/funds',fundsRoutes)
router.use('/items', itemRoutes)
router.use('/transactions', transactionsRoutes)

module.exports = router;
