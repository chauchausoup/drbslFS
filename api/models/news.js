const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
          
         _id:mongoose.Schema.Types.ObjectId,
         
         title:{
               type:String,
               required:true
            },
         content:{
                   type:String,
                   required:true,
         },
         date:{
               type:Date,
               required:true
         }

})


module.exports = mongoose.model('News',newsSchema);



