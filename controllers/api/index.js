const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fundsRoutes = require('./fundsRoutes');
const itemRoutes = require('./itemRoutes');


router.use('/users', userRoutes);
router.use('/funds',fundsRoutes)
router.use('/items', itemRoutes)

module.exports = router;
