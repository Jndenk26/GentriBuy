const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const fundsRoutes = require('./fundsRoutes');

router.use('/users', userRoutes);
router.use('/funds',fundsRoutes)
router.use('/projects', projectRoutes);

module.exports = router;
