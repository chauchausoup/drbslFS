const mongoose = require('mongoose');


const Admin = require('../models/admin');


exports.admin_post_login=(req,res,next)=>{
            const admin = new Admin({
                  _id: new mongoose.Types.ObjectId(),
                  email:req.body.email,
                  password:req.body.password
            })
           admin.save() 
            .then(result=>{
                  console.log(result);


                  res.json({
                        user:{
                              email:result.email,
                              password:result.password
                        }
                  })
                  
                  

            })
          
            .catch(err=>{
                  res.json({
                        error:err
                  })
            })


                  
}

exports.admin_get_login=(req,res,next)=>{
     
      Admin.find()
            .select('-__v')
            .exec()
            
            .then(data=>{
                  const responseData = {
                        items:data.map(datum=>{
                              return{
                                    email:datum.email,
                                    password:datum.password,
                                    id:datum._id
                              }
                        }),
                        count:data.length
                  }
                  res.json(responseData)
            })
            .catch(err=>res.json(err))
      
            
}



