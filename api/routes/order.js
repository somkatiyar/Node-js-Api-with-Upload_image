const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const Order = require('../models/oredr')

router.get('/', (req, res,next) =>{
    res.status(200).json({
        message: "it works (get)"
    });
});


router.post('/create', (req, res,next) =>{

 const order = new Order({
     _id: new mongoose.Types.ObjectId,
     orderBy: req.body.orderBy,
     itemName: req.body.itemName,
     address: req.body.address,
     product: req.body.productId
 });

order.save().then(result =>{
   
    res.status(200).json({
        message: "Order create successfully",
        data: result
       
    });
 }).catch(err=> {
    res.status(200).json({
        message: err.message
       
    });
 })
    
});






router.post('/update',(req, res, next) => {

  const  id = req.body.id
  
    orderBy = req.body.orderBy,
    itemName = req.body.itemName,
    address = req.body.address,
  
  
    console.log(id)


   Order.findByIdAndUpdate(id, {$set:{orderBy:orderBy,itemName:itemName,address:address}}).then(result => {
       res.status(200).json({
           message:"Order updated Successfully..!",
           data: result
       })
   })
})



router.post('/orders',(req, res, next) => {

    Order.find().populate('product', 'name').exec().then(result => {
        res.status(200).json({
            message:"oredrs fecthed Successfully..!",
            data: result
        })
    }).catch(error =>{
        res.status(500).json({
            message:"somthing went wrong",
            data:error
        })
    })
 })

router.post('/:ordertId',(req, res, next) => {

    id = req.body.id
    console.log(id)


   Order.findById({_id:id}).populate('product', 'name').exec().then(result => {
       res.status(200).json({
           message:"oredr fecthed Successfully..!",
           data: result
       })
   })
})







module.exports = router;





