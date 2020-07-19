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
          <Route exact path={"/appointment/:appointmentId"} component={SingleMost} />
          
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
    <>
    <Router>
      <Switch>
      <Route
            exact
            path={"/appointment/:appointmentId/edit"}
            render={() => <SingleMostEdit myProp={singleMost} />}
      />
{/* component={SingleMostEdit} */}
      </Switch>
   


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

   {(singleMost.date)? 
      <Link
        to={`/appointment/${singleMost._id}/edit/`}
        style={{ textDecoration: "none" }}
      >
        <input type="button" value="EDIT" />
        <br />
      </Link> : null }
    </div>
    </Router>

    </>
  );
}



//single most edit componenet

function SingleMostEdit(props) {

  console.log(props)

   let history = useHistory();
      
  const [editInfo,setEditInfo]=useState(props.myProp)



  const editHandler=(e)=>{
    e.preventDefault();
    if(e.target.name==="date"){
      setEditInfo({
        ...editInfo,
        [e.target.name]:e.target.value
    })
    }
   
  
  }



  const submitHandler=(e)=>{
    e.preventDefault();
//let params=[];

      console.log("submitted");

            console.log(editInfo);
            let  params = {
              _id:editInfo._id,
              name:editInfo.name,
              location:editInfo.location,
              problem:editInfo.problem,
              history:editInfo.history,
              date:editInfo.date

        };

        console.log(params);

                        history.push('/admin/')
                        history.go()
        
        
/* 
           
            axios
            .patch(`/news/${editInfo._id}`,params)
            .then((res)=>{
                  console.log(res);

                  if(res.status===200){
                        history.push('/news')
                        history.go()

                  }
                  
            })
            .catch(err=>{
                  console.log(err)
            }); */
 
  } 


  return (
    <div>
      
      <h2>My date:</h2>

      <input type="text" name="date" value={editInfo.date} id="date_edit" onChange={editHandler}/>
      <br/>
      <button type="submit"  onClick={submitHandler}>Submit</button>

      <Link to={`/admin/viewAppointments`} style={{ textDecoration: "none" }}>
        <input type="button" value="GO BACK" />
      </Link>
    </div>
  );
}


