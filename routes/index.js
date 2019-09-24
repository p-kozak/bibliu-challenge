var Users = require('./../controllers/users.controller')
var Books // = Books controller TODO

module.exports = function(router){
  router.post('/users/signin', Users.singInUser)
  router.post('/users/create', Users.createUser) 
  router.get('books', Books.getUserBooks) //Protected endpoint
}



