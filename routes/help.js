var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Help Page');
});

router.get('/aboutus', function(req, res, next) {
    res.render('desktop4/help/aboutus');
});

router.get('/customerSupport', function(req, res, next) {
    res.render('desktop4/help/customerSupport');
});

router.get('/eascordao', function(req, res, next) {
    res.render('desktop4/help/eascordao');
});

router.get('/faq', function(req, res, next) {
    res.render('desktop4/help/faq');
});
module.exports = router;