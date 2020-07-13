import React from 'react';


function DashboardWeekDays(){
return(
      <div id="weekdays_dashboard">
      <h3>
            Select WeekDays for Appointment:
      </h3>
            <form >
                  <label>Sunday</label>
                  <input type="checkbox" name="Sunday" id="sunday"/><br/>
                  <label>Monday</label>

                  <input type="checkbox" name="Monday" id="monday"/><br/>
                  <label>Tuesday</label>

                  <input type="checkbox" name="Tuesday" id="tuesday"/><br/>
                  <label>Wednesday</label>

                  <input type="checkbox" name="Wednesday" id="wednesday"/><br/>
                  <label>Thursday</label>

                  <input type="checkbox" name="Thursday" id="thursday"/><br/>
                  <label>Friday</label>

                  <input type="checkbox" name="Friday" id="friday"/><br/>
                  <label>Saturday</label>

                  <input type="checkbox" name="Saturday" id="saturday"/><br/>

            </form>

            <button type="submit">Submit</button>
      </div>
)
}

export default DashboardWeekDays;
