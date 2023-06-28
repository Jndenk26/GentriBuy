const router = require('express').Router();
const Pledges = require('../models/pledges');


router.post('/', async (req, res) => {
  try {
    const newPledges = await Pledges.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPledge);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const pledgesData = await Pledges.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!pledgesData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(pledgesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;