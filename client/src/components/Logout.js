import React from 'react'
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Middle from './Middle';
//import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';



function DashboardLogout() {
      
      let history = useHistory();

     function onclick(){

            console.info("Logouting clearing session")
            history.push('/')
            sessionStorage.setItem("userData","");
            sessionStorage.clear();
            

     }


      

      return(

            <div>
           <button onClick={onclick}>Logout</button>
            </div>
      );
}

export default DashboardLogout;

