var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: mongoose.SchemaType.email,
        unique: true,
        required: true
    },
    role: {
         type: {String, enum: ['student', 'academic', 'administrator']},
         required: true
    },
    password: {
        type: mongoose.SchemaType.password
    },

    /*User can belong to the institution */
    institution: [{type: Schema.Types.ObjectId, ref: 'Institution'}]


})


UserSchema.statics = {
    create: function(data, cb){
        var user = new this(user)
        user.save(cb)
    },

    get: function(query, cv){
        this.find(query, cb)
    },

    getByName: function(query, cb){
        this.find(query, cb)
    },

    update: function(query, updateData, cb){
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb)
    },

    delete: function(query, cb){
        this.findOneAndDelete(query, cb)
    }
}

module.exports = mongoose.model('User', UserSchema)
