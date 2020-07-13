import React from 'react';


function DashboardHospital(){
return(
      <div id="hospital_dashboard">
      <h3>
            Add Recent Hospital:
      </h3>
            <form  id="recent_hospital">
                  <label>
                        Name:
                  </label>
                  <input type="text" name="name" id="hospital_name"/><br/>
                  <label>
                        Location:
                  </label>
                  <input type="text" name="locaiton" id="hospital_locaiton"/><br/>
                  <label>
                        Speciality:
                  </label>
                  <input type="text" name="speciality" id="hospital_speciality"/><br/>
                  <label>
                        From:
                  </label>
                  <input type="text" name="form" id="hospital_from_date"/><br/>
                  <label>
                        To:
                  </label>
                  <input type="text" name="to" id="hospital_to_date"/><br/>
            <button type="submit">Submit</button>

            </form>


     </div>
)
}

export default DashboardHospital;
