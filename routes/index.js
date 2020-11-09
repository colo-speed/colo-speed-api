var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/contact', async function (req, res, next) {
  try {
    const message = await models.contactMessage.create({
      name: req.body.name,
      postcode: req.body.postcode,
      email: req.body.email,
      message: req.body.message
    });
    res.json({
      success: true
    });
  } catch (error) {
    res.json({
      success: false,
      error: error
    });
  }
});

module.exports = router;