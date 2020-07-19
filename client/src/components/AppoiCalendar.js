import React,{useState} from 'react';
import '../styles/AppoiCalendar.scss'
import { useHistory } from 'react-router';
import axios from "axios";


function AppoiCalendar(){
return(
          <div className="appoi">
                    <h1 id="header">
                              My Appointment Form
                    </h1>
                    <div id="form">
                              <MultipleForms/>                              
                    </div>
          </div>
)
}


function MultipleForms(){
          const handleChange = (name,e) =>  {
              e.persist();
                    setState( prevState => (
                        {
                        ...prevState,
                        [name] : e.target.value
                    }
                    )
                    )
          }

          function nextStep(){
                    setStep(step+1)
          }

          function prevStep(){
                    setStep(step-1)
          }

          // step

        const [step,setStep]=useState(1);

        // state

        const [state , setState] = useState({
                    name:"krishna",
                    phoneNo:"977",
                    location:"Pokhara",
                    problem:"abc",
                    history:"xyz",
                    date:"2020-02-01"
                })
                
        
        const value1={...state};

        switch(step){
                    case 1:
                              return (
                              <Step1 
                                        value1={value1}
                                        handleChange={handleChange}
                                        nextStep={nextStep}
                              />

                              )
                    case 2:
                              return (
                              <Step2
                                        value1={value1}
                                        nextStep={nextStep}
                                        prevStep={prevStep}
                                        handleChange={handleChange}

                              />
                              )
                    case 3:
                              return (
                              <Step3
                              value1={value1}
                              handleChange={handleChange}

                                 nextStep={nextStep}
                                prevStep={prevStep}

                              />
                              )
                    case 4:
                              return (
                              <Step4
                                 value1={value1}
                              handleChange={handleChange}
                              />
                              )
                   
                    default:
                              return (

                                <Step1 
                                value1={value1}
                                handleChange={handleChange}
                                nextStep={nextStep}
                      />
                              )
          }
}

function Step1(props){
          
    function nextHandler(e){
                    e.preventDefault();
                    props.nextStep();
          }

          const {value1,handleChange}=props;
          
          return(
                    <div>
                              <input defaultValue={value1.name} id="appoiName"  onChange={(e)=>{handleChange('name',e)}}/><br/>
                              <input defaultValue={value1.phoneNo} id="appoiPno"  onChange={(e)=>{handleChange('phoneNo',e)}}/><br/>
                              <input defaultValue={value1.location} id="appoiLocation"  onChange={(e)=>{handleChange('location',e)}}/><br/>
                              <input type="button" value="Next" onClick={nextHandler}/><br/>
                             
                    </div>
          )

}

function Step2(props){
          function nextHandler(e){
                    e.preventDefault();
                    props.nextStep();
          }

          function prevHandler(e){
                    e.preventDefault();
                    props.prevStep();

          }
          const {value1,handleChange}=props;

          return(
                    <div>
                            <input defaultValue={value1.history} id="appoiHistory"  onChange={(e)=>{handleChange('history',e)}}/>  <br/>
                            <input defaultValue={value1.problem} id="appoiProblem"  onChange={(e)=>{handleChange('problem',e)}}/>  <br/>

                              <input type="button" value="Next" onClick={nextHandler}/><br/>
                              <input type="button" value="Prev" onClick={prevHandler}/><br/>

                    </div>
          )

}

function Step3(props){
    //backend must have gone here
    let history = useHistory();

    
   
    function nextHandler(e){
        e.preventDefault();
        //console.log(props.value1)
        // make an axios post request with params to the API endpoint
      let  params = {
            name:props.value1.name,
            phoneNo:props.value1.phoneNo,
            location:props.value1.location,
            problem:props.value1.problem,
            history:props.value1.history,
            date:props.value1.date

      };
      console.log(params);

      axios
      .post('/appointment',params)
      .then((res)=>{
        console.log(res);

            if(res.status===200){
                  history.push('/')
                  //history.go()
            }
      })
      .catch(err=>{
            console.log(err)
      });
        
        props.nextStep();
}

function prevHandler(e){
        e.preventDefault();
        props.prevStep();

}
const {value1,handleChange}=props;

          return(
                    <div>
                              <ul id="toConfirm">
                                  <li key="1">{value1.name}</li><br/>
                                  <li key="2">{value1.phoneNo}</li><br/>
                                  <li key="3">{value1.location}</li><br/>
                                  <li key="4">{value1.history}</li><br/>
                                  <li key="5">{value1.problem}</li><br/>

                              </ul>
                              <input type="text" placeholder="Date"  onChange={(e)=>{handleChange('date',e)}}/><br/>
                              <input type="button" value="Confirm" onClick={nextHandler}/><br/>

                              <input type="button" value="Prev" onClick={prevHandler}/><br/>

                    </div>
          )

}

function Step4(props){
    

          return(
                    <div id="success">
                            <h1>Thank You for your submission</h1><br/>
                            <p>Will email you shortly!</p>
                    </div>
          )

}



export default AppoiCalendar;
