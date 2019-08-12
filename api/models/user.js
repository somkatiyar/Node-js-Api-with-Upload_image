const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    class: String,
    age:Number,
    weight: Number,
    height: Number,
    // product: {type:mongoose.Schema.Types.ObjectId, ref:"Product"},
    CreatedDate: { type: Date, required: true, default: Date.now },
    
})


module.exports = mongoose.model('User',userSchema);