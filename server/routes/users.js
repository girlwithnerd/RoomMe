var express = require('express');
var router = express.Router();
var User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.findAll()
  .then(users => {
    res.json(users);
  });
});

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id)
  .then(user => {
    res.json(user);
  });
});

router.post('/', function(req, res, next) {

})

router.put('/:id', function(req, res, next) {

});

router.delete('/:id', function(req, res, next) {

});

module.exports = router;
