const router = require('express').Router();
const Pledges = require('../models/pledges');


const pledgesController = {
    getAllPledges: async (req, res) => {
      try {
        const pledges = await Pledges.findAll();
        res.status(200).json(pledges);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    },
  
    getPledgeById: async (req, res) => {
      const { id } = req.params;
      try {
        const pledge = await Pledges.findByPk(id);
        if (!pledge) {
          return res.status(404).json({ message: 'Pledge not found' });
        }
        res.status(200).json(pledge);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    },
  
    createPledge: async (req, res) => {
      const { money, item_id, user_id } = req.body;
      try {
        const pledge = await Pledges.create({ money, item_id, user_id });
        res.status(201).json(pledge);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    },
  
    updatePledge: async (req, res) => {
      const { id } = req.params;
      const { money, item_id, user_id } = req.body;
      try {
        const pledge = await Pledges.findByPk(id);
        if (!pledge) {
          return res.status(404).json({ message: 'Pledge not found' });
        }
        pledge.money = money;
        pledge.item_id = item_id;
        pledge.user_id = user_id;
        await pledge.save();
        res.status(200).json(pledge);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    },
  
    deletePledge: async (req, res) => {
      const { id } = req.params;
      try {
        const pledge = await Pledges.findByPk(id);
        if (!pledge) {
          return res.status(404).json({ message: 'Pledge not found' });
        }
        await pledge.destroy();
        res.status(204).end();
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    },
  };
  
  module.exports = pledgesController;
  