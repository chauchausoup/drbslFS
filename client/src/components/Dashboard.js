import React from 'react';
import DashboardLocation from './Dashboard/DashboardLocation';
import DashboardNews from './Dashboard/DashboardNews';
import DashboardHospital from './Dashboard/DashboardHospital';
import DashboardWeekDays from './Dashboard/DashboardWeekDays';
//import DashboardLogout from './Dashboard/DashboardLogout';

import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';


function Dashboard(){


return(

          <div className="dasboard">
                  <h3>
                       DASH BOARD FOR ADMIN
                  </h3>
                  <Router>
                  <Switch>
                        <Route exact path="/admin/location" component={DashboardLocation}/>
                        <Route exact path="/admin/news" component={DashboardNews}/>
                        <Route exact path ="/admin/hospital" component={DashboardHospital}/>
                        <Route exact path ="/admin/weekDays" component={DashboardWeekDays}/>
                        


                  </Switch>
                        

                  <Link to="/admin/location"><input type="button" value="Set Location"/></Link><br/>
                  <Link to="/admin/hospital"><input type="button" value="Set New Hospital"/></Link><br/>
                  <Link to="/admin/news"><input type="button" value="Set News"/></Link><br/>
                  <Link to="/admin/weekDays"><input type="button" value="Set Days for the week"/></Link><br/>
                  


            </Router>
             

            
          </div>
)

}

export default Dashboard;
