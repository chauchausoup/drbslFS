const mongoose = require('mongoose');

const Hospital = require('../models/hospital')

exports.get_hospital_all=(req,res,next)=>{
    Hospital.find()
        .select('-__v')
        .exec()
        .then(hospital=>{

            const response={

                count:hospital.length,
                items:hospital.map(h=>{
                    return{
                        id:h._id,
                        name:h.name,
                        location:h.location,
                        speciality:h.speciality,
                        from:h.from,
                        to:h.to,
                        request:{
                            type:'GET'
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