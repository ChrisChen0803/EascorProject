var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Services Page');
});

router.get('/swap', function(req, res, next) {
  res.render('desktop4/services/swap');
});

router.get('/nft', function(req, res, next) {
  res.render('desktop4/services/nft');
});

router.get('/pool', function(req, res, next) {
  res.render('desktop4/services/pool');
});

router.get('/farms', function(req, res, next) {
  res.render('desktop4/services/farms');
});

router.get('/auditbyib', function(req, res, next) {
  res.render('desktop4/services/auditbyib');
});


module.exports = router;
