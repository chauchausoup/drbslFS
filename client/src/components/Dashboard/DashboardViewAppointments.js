import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../styles/appointment.scss";

//import appointmentDate from "../data/appointment";
function AppointmentView() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path={"/admin/viewAppointments/"}
            component={Appointment}
          />
          <Route exact path={"/appointment/:id"} component={SingleMost} />
          <Route
            exact
            path={"/appointment/:appointmentId/edit"}
            component={SingleMostEdit}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default AppointmentView;

function Appointment() {
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/appointment");

      setAppointmentData(result.data.items);
    };

    fetchData();
  }, []);

  return appointmentData.map((appoi, index) => {
    const id = appoi.id;
    console.log(id);

    return (
      <div key={id}>
        {/* <Router>
          <Switch>
          <Route exact path={"/admin/viewAppointments/:appointmentId"}
           render={() => <SingleMost myProp={appoi} />}
           />

            component={SingleMost}  
          </Switch>
        
        </Router>
      */}

        <Link to={`/appointment/${id}`} style={{ textDecoration: "none" }}>
          <div key={id} id="appoi">
            <label id="appointment-title">{appoi.name}</label>
            <br />
            <label id="appointment-location">{appoi.location}</label>
            <br />
            <label id="appointment-phoneNo">{appoi.phoneNo}</label>
            <br />
            <label id="appointment-problem">
              {appoi.problem.split(" ").splice(0, 10).join(" ")}
            </label>
            <br />
            <label id="appointment-history">
              {appoi.history.split(" ").splice(0, 10).join(" ")}
            </label>
            <br />
          </div>
        </Link>
      </div>
    );
  });
}

//get single most component

function SingleMost(props) {
  //console.log("hello");
  const [singleMost, setSingleMost] = useState([]);
  let history = useHistory();
  //let myProp = props.myProp;
  //console.log(props)
  //console.log(props.location.pathname);

  // singleMost.data.items.url

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("", {
          params: {
            ID: props.location.pathname,
          },
        })
        .then(function (response) {
          console.log(response);

          setSingleMost(response.data.item);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    };

    fetchData();
  }, []);

  const backHandler = () => {
    history.push("/admin/viewAppointments");
    //history.go()
    //console.log(singleMost)
  };

  return (
    <div key={singleMost._id}>
      <h2>{singleMost.name}</h2>
      <br />
      <p>{singleMost.phoneNo}</p>
      <br />
      <strong>{singleMost.locaiton}</strong>
      <p>{singleMost.problem}</p>
      <br />
      <p>{singleMost.history}</p>
      <br />
      <p>{singleMost.date}</p>
      <br />
      <br />

      <input type="button" value="GO BACK" onClick={backHandler} />
      <br />

      <Link
        to={`/appointment/${singleMost._id}/edit/`}
        style={{ textDecoration: "none" }}
      >
        <input type="button" value="EDIT" />
        <br />
      </Link>
    </div>
  );
}



//single most edit componenet

function SingleMostEdit(props) {
  

  return (
    <div>
      <h3>COMING SOON</h3>

      <button type="submit">Submit</button><br/>

      <Link to={`/admin/viewAppointments`} style={{ textDecoration: "none" }}>
        <input type="button" value="GO BACK" />
      </Link>
    </div>
  );
}


