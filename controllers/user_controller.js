let models        = require('../models')
var jwt           = require('jsonwebtoken');
var passwordHash  = require('password-hash');

var get_user = function(req, res){
  models.User.findAll().then(function (results){
    res.send(results)
  })
}

var post_user = function(req, res){
  var hashed = passwordHash.generate(req.body.password);
  models.User.create(
    {
      username : req.body.username,
      email: req.body.email,
      password: hashed,
      role: req.body.role
    }).then(function(data){
      res.send(data);
  })
}

var get_id_user = function(req, res){
  var idGet = req.params.id
  models.User.findById(idGet).then(function (results){
    res.send(results)
  })
}

var delete_user = function(req, res){
  var idGet = req.params.id
  models.User.findById(idGet).then(function (results){
    if(results){
      results.destroy({where:{id:req.body.id}})
      res.send(results)
    } else {
      res.send('ERROR!')
    }
  })
}

var put_user = function(req, res){
  var idPut = req.params.id
  models.User.findById(idPut).then(function (data){
    models.User.update(
      {
        username : req.body.username,
        email: req.body.email,
        password:req.body.password,
        role: req.body.role
      }, {where:{id: req.params.id}}).then(function (results){
      res.send(data)
      })
    })
}

var signin_user = function(req, res, next) {
  var pwd = req.body.password
  var mail = req.body.email
  models.User.find({where:{email: mail}})
  .then(function (data) {
    // console.log(data.dataValues)
    if(passwordHash.verify(pwd, data.password)) {
      var token = jwt.sign({id: data.id, username: data.username, role: data.role, email: data.email}, 'shhhhh');
      res.send(token)
    } else {
      res.send('Unauthorized')
    }
  })
}

var signup_user = function(req, res){
  var hashed = passwordHash.generate(req.body.password);
  models.User.create(
    {
      username : req.body.username,
      email: req.body.email,
      password: hashed,
      role: req.body.role
    }).then(function(data){
      res.send(data);
  })
}

module.exports = {
  get_user,
  post_user,
  get_id_user,
  delete_user,
  put_user,
  signin_user,
  signup_user
}
