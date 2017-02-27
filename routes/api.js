var express         = require('express');
var router          = express.Router();
var user_controller = require('../controllers/user_controller')
var helper          = require('../helper/auth')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', helper.forAdmin, user_controller.get_user)

router.post('/', helper.forAdmin, user_controller.post_user)

router.get('/:id', helper.forAdmin, user_controller.get_id_user)

router.delete('/:id', helper.forAdmin, user_controller.delete_user)

router.put('/:id', helper.forAdmin, user_controller.put_user)

module.exports = router;
