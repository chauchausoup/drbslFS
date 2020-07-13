import React from 'react';


function DashboardLocation(){
return(
      <div id="locaiton_dashboard">
      <h3>
            Postal Code of your current location:
      </h3>
            <input type="number" name="postalCode" id="postal_code"/><br/>

            <button type="submit">Submit</button>
      </div>
)
}

export default DashboardLocation;
