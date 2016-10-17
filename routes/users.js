var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function(req, res, next){
  const token = jwt.sign({}, process.env.JWT_TOKEN, {
    expiresIn: '5 years'
  });

  // const user = {
  //   username: req.body.username,
  //   password: Hash(req.body.password),
  //   token: token
  // };

  //This is where the query to create a user would be placed
  // user.create(user)
  //   .then(function(){
  //
  res.json({token: token});
  // 
  //   });

});

module.exports = router;
