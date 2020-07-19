import React,{useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

const axios = require('axios');
function Login(){
      const [info,setInfo]= useState({
            email:"",
            password:""
      })
      const [validity,setValidity]=useState(0);
      let history = useHistory();



      function handleInputChange(e){
            setInfo({
                  ...info,
                  [e.target.name]:e.target.value
                  
            })
           

      }

      
      function handleSubmit(e){
            e.preventDefault();
            console.log(info)
            let  params = {
                  email:info.email,
                  password:info.password
            };
            axios
                  .post('/login',params)
                  .then((res)=>{
                  
                             if(res.status===200){
                              setValidity((validity) =>{
                                    validity=(!validity)
                                    if(validity){
                                          //here i redirect to localhost/admin
                                          history.push('/admin')
                                          sessionStorage.setItem('userData',res)

                                    }
                              })
                          }

                        console.log(res)
                  })
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
                        <input 
                        type="text" 
                        name="email" 
                        id="login_email" 
                        onChange={handleInputChange}
                        />
                        <br/>
                        <input 
                        type="password" 
                        name="password" 
                        id="login_password" 
                        onChange={handleInputChange}
                        />
                        <br/>
                       <button type="submit">Login</button> 
                       
                  </form>

          </div>
)
}

export default Login;
