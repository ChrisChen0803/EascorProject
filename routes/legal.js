var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Legal Page');
});

router.get('/terms-of-use', function(req, res, next) {
    res.render('desktop4/legal/terms-of-use');
});

router.get('/privacy-policy', function(req, res, next) {
    res.render('desktop4/legal/privacy-policy');
});

router.get('/trademark-policy', function(req, res, next) {
    res.render('desktop4/legal/trademark-policy');
});

router.get('/security', function(req, res, next) {
    res.render('desktop4/legal/security');
});
module.exports = router;