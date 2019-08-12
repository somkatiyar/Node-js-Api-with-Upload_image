const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('../models/product')

const multer = require('multer');


var mime = ["image/jpeg","image/jpg","image/png"];

const productController = require('../controller/product')

var storage = multer.diskStorage({
  destination:function(req,file,callback){
    if(mime.indexOf(file.mimetype) >= 0){
    
      callback(null,'./public');
    } else{
      
      callback("unable to upload",null);
    }
  },
  filename:function(req,file,callback){
    callback(null,file.fieldname + '_' + Date.now()+"_"+file.originalname);
  }
});



const upload = multer({storage:storage})



router.post('/create',upload.single('productImage'), (req, res,next) =>{
console.log(req.file)
 const product = new Product({
     _id: new mongoose.Types.ObjectId,
     price: req.body.price,
     name: req.body.name,
     productImage: req.file.path
 });

 product.save().then(result =>{
   
    res.status(200).json({
        message: "it works (post)",
        data: result
       
    });
 }).catch(err=> {
    res.status(200).json({
        message: err.message
       
    });
 })
    
});






router.post('/update',productController.product_update)

router.post('/productById',productController.product_by_id)




router.post('/products',(req, res, next) => {

    id = req.body.id
    


   Product.find().exec().then(result => {
       res.status(200).json({
           message:"Products fecthed Successfully..!",
           data: result
       })
   }).catch(error =>{
    
    res.status(500).json({
     message:error,
  
    })
})
})


module.exports = router;





