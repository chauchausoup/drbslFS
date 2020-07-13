const mongoose = require('mongoose');

const hospitalSchema = mongoose.Schema({
          
         _id:mongoose.Schema.Types.ObjectId,
         
         name:{
               type:String,
               required:true
            },
         location:{
                   type:String,
                   required:true,
         },speciality:{
               type:String,
               default:"Physician"
         },
         fromDate:{
               type:Date,
               required:true
         },
         toDate:{
               type:Date,
               required:true
         }

})


module.exports = mongoose.model('Hospital',hospitalSchema);



