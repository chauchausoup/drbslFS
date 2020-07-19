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
      <div key={id} id="appoi">
        <Router>
          <Switch>
          <Route exact path={"/admin/viewAppointments/:appointmentId"}
           render={() => <SingleMost myProp={appoi} />}
           />

           {/*  component={SingleMost}  */}
          </Switch>

          <Link
            to={`/admin/viewAppointments/${id}`}
            style={{ textDecoration: "none" }}
          >
            <div key={id}>
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
        </Router>

      </div>
    );
  });
}

//get single most component

function SingleMost(props) {
  console.log("hello");
  const [singleMost, setSingleMost] = useState([]);
  let history = useHistory();
let myProp = props.myProp;

  console.log(myProp);

  // singleMost.data.items.url

   useEffect(() => {
    const fetchData = async () => {
      axios
        .get("/appointment/"+myProp.id)
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

  const backHandler=()=>{
    history.push('/admin/viewAppointments')
    //history.go()
    console.log(singleMost)
  }

  return (
    <>
      <Router>
        <Switch>
          <Route
            
            path={"/admin/viewAppointments/:appointmentId/edit"}
            render={() => <SingleMostEdit myProp={singleMost} />}
          />
         {/* <Route exact path={"/admin/viewAppointment/:appointmentId"} component={}/>  */}
         

        </Switch>


        <div key={myProp._id}>
        <h1>Hello Appointer</h1>
          <h2>{myProp.name}</h2>
          <br />
          <p>{myProp.phoneNo}</p>
          <br />
          <strong>{myProp.locaiton}</strong>
          <p>{myProp.problem}</p>
          <br />
          <p>{myProp.history}</p>
          <br />
          <br />

         
            <input type="button" value="GO BACK" onClick={backHandler}/>
            <br />
         
          <Link
            to={`/admin/viewAppointments/${singleMost._id}/edit`}
            style={{ textDecoration: "none" }}
          >
            <input type="button" value="EDIT" />
            <br />
          </Link>

        </div>
      </Router>

    </>
  );
}

// single most delete componenet
/* 
function SingleMostDelete(props){
  let history = useHistory();

   const appointmentDelete=(e)=>{
    e.preventDefault();
    const fetchData = async () => {
      axios
        .delete("", {
          params: {
            ID: props.location.pathname,
          },
        })
        .then(function (response) {
          
          history.push('/appointment')
          history.go()
        })
        .catch(function (error) {
          console.log(error);
        });
        
    };

    fetchData();
  }

  
return(
  <div> 
   <h1>Are you sure ?</h1>
        <input type="button" value="YES" onClick={appointmentDelete}/><br/>
    <Link to={`/appointment/`} style={{ textDecoration: "none" }}>
        <input type="button" value="NO" /><br/>
      </Link>

  </div>
)
} */

//single most edit componenet

function SingleMostEdit(props) {
  /*  let history = useHistory();
      
  const [editInfo,setEditInfo]=useState(props.myProp)

console.log("edit")
console.log(props)

const editHandler=(e)=>{
  e.preventDefault();
  setEditInfo({
    ...editInfo,
    [e.target.name]:e.target.value
})
console.log(editInfo)
}


  const submitHnadler=(e)=>{
    e.preventDefault();
//let params=[];

      console.log("submitted");

            console.log(editInfo);
            let  params = {
              _id:editInfo._id,
              title:editInfo.title,
              content:editInfo.content,
              date:editInfo.date

        };
        

           
            axios
            .patch(`/appointment/${editInfo._id}`,params)
            .then((res)=>{
                  console.log(res);

                  if(res.status===200){
                        history.push('/appointment')
                        history.go()

                  }
                  
            })
            .catch(err=>{
                  console.log(err)
            });
 
  } */

  return (
    <div>
      <h3>COMING SOON</h3>

      <button type="submit">Submit</button>

      <Link to={`/admin/viewAppointments/`} style={{ textDecoration: "none" }}>
        <input type="button" value="GO BACK" />
      </Link>
    </div>
  );
}
