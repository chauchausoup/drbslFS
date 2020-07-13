const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
      index:Number
})

const weekDaysSchema = mongoose.Schema({
          
         _id:mongoose.Schema.Types.ObjectId,
         weekDays:[daySchema]
        
})


module.exports = mongoose.model('WeekDays',weekDaysSchema);



