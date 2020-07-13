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
            fromDate:req.body.fromDate,
            toDate:req.body.toDate
      }) 
      hospital.save()
              .then(result=>{
                    res.json({
                          message:"ok",
                          hospitalData:{
                                name:result.name,
                                location:result.location,
                                speciality:result.speciality,
                                fromDate:result.fromDate,
                                toDate:result.toDate
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
           

                  
}





