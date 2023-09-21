var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/2', function(req, res, next) {
  res.render('index2');
});

router.get('/4', function(req, res, next) {
  res.render('desktop4');
});

router.get('/4', function(req, res, next) {
  res.render('desktop4');
});




module.exports = router;
