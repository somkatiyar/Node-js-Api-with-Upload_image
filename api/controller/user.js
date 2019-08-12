const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const Users = require('../models/user')

exports.userCreate = (req, res,next) =>{

    const user = new Users({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        weight: req.body.weight,
        height: req.body.height
    });
   
   user.save().then(result =>{
      
       res.status(200).json({
           message: "User created successfully",
           data: result
          
       });
    }).catch(err=> {
       res.status(200).json({
           message: err.message
          
       });
    })
       
   }


   exports.userFind = (req, res, next) => {
// const arrayOfIds =['som','rahul']
// {name: {$in:arrayOfIds}}


   Users.find({$or:[{age:{$lt:35}},{height:{$gt:150}}]}).exec().then(result => {
   
    res.status(200).json({
        message:"Users fecthed Successfully..!",
        data: result
    })
}).catch(error =>{
 
 res.status(500).json({
  message:error,

 })
})
}