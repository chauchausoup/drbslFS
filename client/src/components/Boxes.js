import React, { useEffect,useState } from 'react';
import '../styles/Boxes.scss'

const axios = require('axios');



function Boxes(){
   const[hospitalData,setHospitalData]= useState([])

    useEffect(()=>{
            axios.get('/hospital')
              .then(response => {
                var hospitalDatum = response.data.items;
                setHospitalData(hospitalDatum)
                console.log(hospitalData.name);

                

              })
              .catch(err => console.log(err))
          
    },[hospitalData])

return(
         <div className="hospitals">
                    <h1 id="head">
                    Hospitals that I have served:
                    </h1>
                    <div className="boxes">
                   {/* {
                    hospitalData.map((data,index)=>{
                              return(
                              <div className="box" key={index}>
                                        Name : <label id="name">{data.name}</label><br/>
                                        Location : <label id="location">{data.location}</label><br/>
                                        Speciality : <label id="speciality">{data.speciality}</label><br/>
                                        From : <label id ="from">{data.from}</label><br/>
                                        To : <label id="to">{data.to}</label><br/>
                              </div>
                              )
                    }) 
                   }  */}
                    </div>
         </div>
)
}



export default Boxes;

