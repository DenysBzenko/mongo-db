const express = require('express');
const router = express.Router();
const iPhone = require("../models/iPhone");

router.get('/new', (req, res) => {
  res.render('new-iphone');
});

router.get('/', async (req, res) => {
  try {
    const iphones = await iPhone.find();
    res.render('index', { iphones: iphones }); 
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const iphone = await iPhone.findById(req.params.id);
    if (!iphone) {
      return res.status(404).send('iPhone not found');
    }
    res.render('index', { iphones: [iphone] }); 
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newIPhone = new iPhone({
      modelName: req.body.modelName,
      storageCapacity: req.body.storageCapacity,
      color: req.body.color,
      price: req.body.price,
      inStock: req.body.inStock === 'on', 
    });
    await newIPhone.save();
    res.redirect('/iphones');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
