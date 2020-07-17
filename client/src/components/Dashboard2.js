import React from 'react'
import Dashboard from '../components/Dashboard';
import Logout from './Logout'
import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';


function Dashboard2() {
      let history = useHistory();

      useEffect(()=>{
            if(!sessionStorage.getItem("userData")){
                  history.push('/')
            }
      })
      return (
            <div>
                  <Dashboard/>
                  <Logout/>

            </div>
      )
}

export default Dashboard2
