const express = require('express');
const activitiesController = require('../controllers/activities');
const router = express.Router();

/* GET activities listing. */
/*router.get('/activities', activitiesController.getAll);
res.render('activities', { title: 'Express' });
module.exports = router;*/


/* GET activities listing. */
router.get('/', function(req, res, next) {
  res.send('I am in activities');
});

/*
router.get('/activities', function(req, res, next) {
    res.render('activities', { title: 'Express' });
  });*/


  //Create activities

router.get('/create', activitiesController.create);

//router.post('/create', activitiesController.store);


//Update Activities

router.post('update/:id', activitiesController.update);

//Remove Activities

router.get('/remove/:id', activitiesController.remove);

  
  module.exports = router;