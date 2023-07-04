const router = require('express').Router();
const { Transactions, User } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try{
        const transactionsData = await Transactions.findAll({
            include:[
                {
                model: User,
                attributes:{exclude: ['password']}
                }
            ]
        })
        
        const transactions = transactionsData.map((transaction) => transaction.get({ plain: true }));

        res.status(200).json(transactions)
    } catch(err) {
        res.status(400).json(err);
    }
})

router.post('/',withAuth, async (req, res) => {
    try {
      const newTransactions = await Transactions.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newTransactions);
    } catch (err) {
      res.status(400).json(err);
    }
});