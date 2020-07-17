const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('../models/admin');

exports.admin_post_login=(req,res,next)=>{
      Admin.find({email:req.body.email})
            .exec()
            .then(user=>{
                  console.log(user)
                  if(user.length<1){
                        return res.status(409).json({
                              message:"Auth Failed"
                        })
                  }
                  else{
                        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                              if(err){
                              
                                    return res.status(408).json({
                                               message:"Auth failed"
                                               }) 
                             }
                             if(result){
                              const token = jwt.sign(
                                    {
                                          email:user[0].email,
                                          userId:user[0]._id
                                    },
                                    process.env.JWT_KEY,
                                    {
                                          expiresIn:"1h"
                                    }
                              )
                              return res.status(200).json({
                                    message:"Auth Success",
                                    token:token
                              })
                        }
                        if(!result){
                              res.status(406).json({
                                    message:"Auth no success"
                              })
                        }
                             
                        })
                  }
            })
      
            .catch(err=>{
                  res.json({
                        error:err
                  })
            })                 
      
      
     
      }




/* 
 //login poster only for two dbs

      Admin.find({email:req.body.email})
            .exec()
            .then(user=>{
                  if(user.length>=1){
                        res.status(409).json({
                              message:"Already exists"
                        })
                  }else{
                        bcrypt.hash(req.body.password,10,(err,hash)=>{
                              if(err){
                                    res.status(409).json({
                                          message:err
                                    })
                              }else{
                              const admin = new Admin({
                                          _id: new mongoose.Types.ObjectId(),
                                          email:req.body.email,
                                          password:hash
                                    })
                                    admin.save()
                                    .then(admin=>{
                                          
                                          res.status(200).json({
                                                id:admin._id,
                                                message:"User Registered Successfully",
                                                email:admin.email,
                                                password:admin.password
                                          })
            
                                    })
                                    .catch(err => {
                                    console.log(err)
                                    res.status(500).json({
                                    error: err
                              })
                        });
                        }
                        })
                  }
            })
          
*/


      /* 
      // login authenticator

       
      
      */