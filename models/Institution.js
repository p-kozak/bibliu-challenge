var mongoose = require('mongoose')

var Schema = mongoose.Schema

var InstitutionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: mongoose.SchemaType.url,
        required: true
    },
    emailDomain: {
         type: String, 

    }

})

InstitutionSchema.statics = {
    create: function(data, cb){
        var Institution = new this(Institution)
        Institution.save(cb)
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

module.exports = mongoose.model('Institution', InstitutionSchema)


