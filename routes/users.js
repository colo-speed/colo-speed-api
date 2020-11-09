var express = require('express');
var router = express.Router();
var models = require('../models/');

/* router.get('/:id', async(req, res) => {
  try{
    const state = await models.user.findOne({
        where: {
          id: parseInt(req.params.id)
        }, 
        include: [{
          model: models.userInterest
        }]
    });

    if (!state)
        throw new Error("No user found with the given ID.");

    res.json({ success: true, state });
  }
  catch (error){
    res.json({ success: false, error: error  });
  }
}); */

router.post('/register', async(req, res) => {  // check that pid corresponds to the id of gateway
  try {
    const user = await models.user.findOrCreate({
      where: {
        email: req.body.email
      }, 
      defaults: {
        name: req.body.name,
        birthdate: req.body.birthdate,
        postcode: req.body.postcode,
        consent: req.body.consent
      }
    });
    if (req.body.interest) {
      const interest = await models.userInterest.findOrCreate({
        where: {
          interest: req.body.interest,
          userId: user[0].id
        }
      });
    }
    res.json({ success: true });  }
  catch (error){
    res.json({ success: false, error: error });
  }
});

module.exports = router;
