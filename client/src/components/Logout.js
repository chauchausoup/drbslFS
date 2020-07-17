import React from 'react'
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Middle from './Middle';
//import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';



function DashboardLogout() {
      
      let history = useHistory();

     function onclick(){

            console.log("hello");
            history.push('/')

     }


      

      return(

            <div>
           <button onClick={onclick}>Logout</button>
            </div>
      );
}

export default DashboardLogout;

