var mongoose = require('mongoose')

var Schema = mongoose.Schema

var BookSchema = new Schema({
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: false
    },

    author: {
        type: String,
        required: true,
        unique: false
    },

    institution: [{type: Schema.Types.ObjectId, ref: 'Institution'}]


})


InstitutionSchema.statics = {
    create: function(data, cb){
        var Book = new this(Book)
        Book.save(cb)
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


module.exports = mongoose.model('Book', BookSchema)

