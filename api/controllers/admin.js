const mongoose = require('mongoose');


const Location = require('../models/locaiton');
const weekDays = require('../models/weekDays');
const Hospital = require('../models/hospital');
const News = require('../models/news');



exports.location_post=(req,res,next)=>{
      const location = new Location({
            _id:new mongoose.Types.ObjectId(),
            zip:req.body.zip
      }) 
      location.save()
              .then(result=>{
                    res.json({
                          message:"ok",
                          zip:result.zip
                          
                    })
              })
              .catch(err=>{
                  res.json({
                        error:err
                  })
            })


                  
}

exports.hospital_post=(req,res,next)=>{
      const hospital = new Hospital({
            _id:new mongoose.Types.ObjectId(),
            name:req.body.name,
            location:req.body.location,
            speciality:req.body.speciality,
            from:req.body.from,
            to:req.body.to
      }) 
      hospital.save()
              .then(result=>{
                    res.status(200).json({
                          message:"ok",
                          hospitalData:{
                                name:result.name,
                                location:result.location,
                                speciality:result.speciality,
                                from:result.from,
                                to:result.to
                          }
                          
                    })
              })
              .catch(err=>{
                  res.json({
                        error:err
                  })
            })           

                  
}

exports.weekDays_post=(req,res,next)=>{
           

                  
}

exports.news_post=(req,res,next)=>{
      const news = new News({
            _id:new mongoose.Types.ObjectId(),
            title:req.body.title,
            content:req.body.content,
            date:req.body.date
            
      }) 
      news.save()
              .then(result=>{
                    res.json({
                          message:"ok the news was posted",
                          newsData:{
                                title:result.title,
                                content:result.content,
                                date:result.date
                          }
                          
                    })
              })
              .catch(err=>{
                  res.json({
                        error:err
                  })
            }) 

                  
}





