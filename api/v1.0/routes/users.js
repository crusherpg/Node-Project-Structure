var express = require('express');
var router = express.Router();

/* GET users listing. */
// Format or Sequence of workflow to achieve
// router.get('/',auth,validator,controller);
//---------------------------------------
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
