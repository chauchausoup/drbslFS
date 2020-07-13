const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
          
         _id:mongoose.Schema.Types.ObjectId,
         
         zip:{
               type:Number,
               required:true
            }

})


module.exports = mongoose.model('Location',locationSchema);



