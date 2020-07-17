import React, { useEffect,useState } from 'react';
import '../styles/Boxes.scss'

const axios = require('axios');



function Boxes(){
   const[hospitalData,setHospitalData]= useState([])


   useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/hospital',
      );
 
      setHospitalData(result.data.items);
    };
 
    fetchData();
  }, []);

return(
         <div className="hospitals">
                    <h1 id="head">
                    Hospitals that I have served:
                    </h1>
                    <div className="boxes">
                    {
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
                   }  
                    </div>
         </div>
)
}



export default Boxes;

