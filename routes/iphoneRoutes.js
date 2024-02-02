const express = require('express');
const router = express.Router();
const iPhone = require("../models/iPhone"); 


router.get('/new', (req, res) => {
  res.render('new-iphone');
});


router.get('/', async (req, res) => {
  try {
    const iphones = await iPhone.find();
    res.render('index', { iphones }); 
  } catch (error) {
    res.status(500).send(error.message);
  }
});




module.exports = router;
