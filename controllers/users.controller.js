var Users = require('./../models/User');

exports.createUser = function(req, res, next){
    var user = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password, //Going to add bcrypt encryption later,
        instituion: req.body.instituion //For now assumes, that instituion is choosen. Later, going to choose it automaticaly from email
    }

    Users.createUser(user, function(err, hero){
        if(err){
            res.json({
                error: err
            })
            res.json({
                messsage: 'User created successfully'
            })
        }
    })


}

exports.singInUser = function(req, res, next){

}


