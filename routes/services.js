var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Services Page');
});

router.get('/swap', function(req, res, next) {
  res.render('swap');
});

router.get('/nft', function(req, res, next) {
  res.render('nft');
});

router.get('/pool', function(req, res, next) {
  res.render('pool');
});

router.get('/farms', function(req, res, next) {
  res.render('farms');
});

router.get('/auditbyib', function(req, res, next) {
  res.render('auditbyib');
});


module.exports = router;
