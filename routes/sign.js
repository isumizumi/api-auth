var express         = require('express');
var router          = express.Router();
var user_controller = require('../controllers/user_controller')
var helper          = require('../helper/auth')

router.post('/signin', user_controller.signin_user)

router.post('/signup', user_controller.signup_user)

module.exports = router;
