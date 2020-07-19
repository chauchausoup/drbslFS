const mongoose = require('mongoose');


const Appointment = require('../models/appointment');
//const appointment = require('../models/appointment');


exports.get_appointments_all=(req,res,next)=>{
    Appointment.find()
        .select('-__v')
        .exec()
        .then(appointment=>{

            const response={

            count:appointment.length,
            items:appointment.map(n=>{
                return{
                    id:n._id,
                    name:n.name,
                    phoneNo:n.phoneNo,
                    location:n.location,
                    history:n.history,
                    problem:n.problem,
                    date:n.date,

                    request:{
                        type:'GET',
                        url:"/appointment/"+ n._id
                    }
                }
            })
        }
        res.status(200).json(response)

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                  error: err
            })
      })
       
}


exports.get_appointment_single=(req,res,next)=>{
     const id=req.params.appointmentId;
     Appointment.findById(id)
        .select('-__v')
        .exec()
        .then((appointment)=>{
           

            if(appointment){
                res.status(200).json({
                    item:appointment,
                })
            }else{
                res.status(400).json({
                    message:"not valid entry"
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                  error: err
            })
        });

               
}


/* exports.delete_news_single=(req,res,next)=>{
    const id = req.params.newsId;
    News.remove({_id:id}).exec()
        .then(result=>{
            res.status(200).json({
                items:result,
                message:"item deleted",
                request:{
                    type:"GET",
                    url:"/appointment",
                    description:"lets go back to the appointment"
                }
            })

        })
        .catch(err => {
            console.log(err)

            res.status(500).json({
                  error: err
            })
      })


} */
exports.post_appointment_single=(req,res,next)=>{


    const appointment = new Appointment({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        phoneNo:req.body.phoneNo,
        location:req.body.location,
        history:req.body.history,
        problem:req.body.problem,
        date:req.body.date   
  }) 

/* 
    var query = {'_id': req.body._id};

    req.newData = appointment;

News.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
    if (err) return res.send(505, {error: err});
    return res.json({
        message:"updated"
    });
}); */

       
        appointment.save()
                .then(result=>{
                      res.json({
                            message:"ok the appointment was posted",
                            appointmentData:{
                                id:result._id,
                                name:result.name,
                                phoneNo:result.phoneNo,
                                location:result.location,
                                history:result.history,
                                problem:result.problem,
                                date:req.body.date
                            }
                            
                      })
                })
                .catch(err=>{
                    res.json({
                          error:err
                    })
              })  
  
                    
  
}

//ideal is if single field is changed

exports.update_appointment_single=(req,res,next)=>{


    const appointment = new Appointment({
        _id:req.body._id,
        name:req.body.name,
        phoneNo:req.body.phoneNo,
        location:req.body.location,
        problem:req.body.problem,
        history:req.body.history,
        date:req.body.date
        
  }) 



    var query = {'_id': req.body._id};

    req.newData = appointment;

Appointment.findOneAndUpdate(query, req.newData, {upsert: true}, function(err, doc) {
    if (err) return res.send(505, {error: err});
    return res.json({
        message:"updated"
    });
});

      /*  
        news.save()
                .then(result=>{
                      res.json({
                            message:"ok the news was posted",
                            newsData:{
                                  title:result.title,
                                  content:result.content,
                                  date:result.date,
                                  _id:result._id
                            }
                            
                      })
                })
                .catch(err=>{
                    res.json({
                          error:err
                    })
              })  */
  
                    
  
}
