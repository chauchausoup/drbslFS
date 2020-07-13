import React,{useState} from 'react';
import {Link} from 'react-router-dom';



const axios = require('axios');




function Login(){
      const [info,setInfo]= useState({
            email:"",
            password:""
      })

      function handleInputChange(e){
            setInfo({
                  ...info,
                  [e.target.name]:e.target.value
                  
            })
            console.log(info)

      }

      function handleSubmit(e){
            e.preventDefault();
            console.log("hey");
            console.log(info)

            let  params = {
                  email:info.email,
                  password:info.password
            };

            axios
                  .post('/admin',params)
                  .then(()=>console.log("user created"),
                  
                  )
                  .catch(err=>{
                        console.log(err)
                  });


      };



return(
          <div className="login">
                  <h3>
                        Welcome to the Logination page.
                  </h3>
                  <p>
                        hello user
                  </p>
                  <form onSubmit={handleSubmit}>
                        <input type="text" name="email" id="login_email" onChange={handleInputChange}/>
                        <input type="password" name="password" id="login_password" onChange={handleInputChange}/>
                       <button type="submit">Login</button> 
                  </form>

          </div>
)
}

export default Login;
