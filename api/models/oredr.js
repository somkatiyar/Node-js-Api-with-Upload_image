const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    orderBy: String,
    itemName: String,
    address:String,
    product: {type:mongoose.Schema.Types.ObjectId, ref:"Product"},
    CreatedDate: { type: Date, required: true, default: Date.now },
    
})


module.exports = mongoose.model('Order',orderSchema);