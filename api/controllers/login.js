const mongoose = require('mongoose');
//const bcrypt = require('bcrypt')
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
                        if(req.body.password===user[0].password){
                              
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
                              


                        }}
                        
                  
                    )
          
            .catch(err=>{
                  res.json({
                        error:err
                  })
            })                 
}




