const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    CreatedDate: { type: Date, required: true, default: Date.now },
    productImage: {type:String, required: false}
    
})


module.exports = mongoose.model('Product',productSchema);