const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//CORS setting
var cors = require('cors')
app.use(cors())



// some mongoose connection

mongoose.connect('mongodb+srv://academind:'
+process.env.MONGO_ATLAS_PW+
'@rest-api-academind.h9wd0.mongodb.net/drbsl?retryWrites=true&w=majority',
{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false,
      useCreateIndex:true

});


// mongo db checker


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  console.log("Mongodb connected")
});



//lets make some routes

const  adminRoutes = require('./api/routes/admin')
const loginRoutes=require('./api/routes/login');
const newsRoutes = require('./api/routes/news');
const hospitalRoutes = require('./api/routes/hospital');

app.use('/admin',adminRoutes);
app.use('/login',loginRoutes);
app.use('/news',newsRoutes);
app.use('/hospital',hospitalRoutes);


// error handling in a server app

app.use((req,res,next)=>{
      const error = new Error('its an error')
      error.status=404
      next(error)
})
app.use((error,req,res,next)=>{
      res.status(error.status||500)
      res.json({
                message:error.message
      })
})


module.exports = app;




