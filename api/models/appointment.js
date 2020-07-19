const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
          
         _id:mongoose.Schema.Types.ObjectId,
         
         name:{
               type:String,
               required:true
            },
         phoneNo:{
                   type:Number,
                   required:true,
         },
         location:{
               type:String,
               default:"Pokhara"
         },
         history:{
               type:String,
               required:true
         },
         problem:{
               type:String,
               required:true
         },
         date:{
               type:String,
               required:true
         }
})


module.exports = mongoose.model('Appointment',appointmentSchema);



