const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('../models/product')

const multer = require('multer');


var mime = ["image/jpeg","image/jpg","image/png"];


exports.product_update = (req, res, next) => {

    const  id = req.body.id
    
      name = req.body.name,
      price = req.body.price
    
    
      console.log(id,name)
  
  
     Product.findByIdAndUpdate(id, {$set:{name:name,price,price}}).then(result => {
         res.status(200).json({
             message:"Product updated Successfully..!",
             data: result
         })
     })
  }

  exports.product_by_id = (req, res, next) => {

    id = req.body.id
    console.log(id)


   Product.findById({_id:id}).then(result => {
       res.status(200).json({
           message:"Product fecthed Successfully..!",
           data: result
       })
   }).catch(error =>{
    
    res.status(500).json({
     message:error,
  
    })
})
}