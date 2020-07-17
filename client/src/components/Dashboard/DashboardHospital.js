import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';


const axios = require('axios');


function DashboardHospital(){
      let history = useHistory();
      
      const [hospitalInfo,setHospitalInfo]=useState({
            name:"",
            location:"",
            speciality:"",
            from:"",
            to:""

      })

      const changeHandler=(e)=>{
            setHospitalInfo({
                  ...hospitalInfo,
                  [e.target.name]:e.target.value
            })
            console.log(hospitalInfo)
      }


      const submitHandler=(e)=>{
            e.preventDefault();
            console.log(hospitalInfo)
            let  params = {
                  name:hospitalInfo.name,
                  location:hospitalInfo.location,
                  speciality:hospitalInfo.speciality,
                  from:hospitalInfo.from,
                  to:hospitalInfo.to

            };
            axios
            .post('/admin/hospital',params)
            .then((res)=>{
            
                  if(res.status===200){
                        history.push('/admin')

                  }
                  
            })
            .catch(err=>{
                  console.log(err)
            });

      }

     

return(
      <div id="hospital_dashboard">
      <h3>
            Add Recent Hospital:
      </h3>
            <form  id="recent_hospital" onSubmit={submitHandler}>
                  <label>
                        Name:
                  </label>
                  <input type="text" name="name" id="hospital_name" onChange={changeHandler}/><br/>
                  <label>
                        Location:
                  </label>
                  <input type="text" name="location" id="hospital_locaiton" onChange={changeHandler}/><br/>
                  <label>
                        Speciality:
                  </label>
                  <input type="text" name="speciality" id="hospital_speciality" onChange={changeHandler}/><br/>
                  <label>
                        From:
                  </label>
                  <input type="text" name="from" id="hospital_from_date" onChange={changeHandler}/><br/>
                  <label>
                        To:
                  </label>
                  <input type="text" name="to" id="hospital_to_date" onChange={changeHandler}/><br/>
            <button type="submit">Submit</button>

            </form>


     </div>
)
}

export default DashboardHospital;
