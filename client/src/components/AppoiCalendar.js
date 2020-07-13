import React,{useState} from 'react';
import '../styles/AppoiCalendar.scss'


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

        const [step,setStep]=useState(1);

        const [state , setState] = useState({
                    name:"krishna",
                    pNo:"977",
                    location:"Pokhara",
                    problem:"abc",
                    history:"xyz"
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
                                 nextStep={nextStep}
                                prevStep={prevStep}

                              />
                              )
                    case 4:
                              return (
                              <Step4/>
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
                              <input defaultValue={value1.name} id="appoiName"  onChange={(e)=>{handleChange('name',e)}}/>
                              <input defaultValue={value1.pNo} id="appoiPno"  onChange={(e)=>{handleChange('pNo',e)}}/>
                              <input defaultValue={value1.location} id="appoiLocation"  onChange={(e)=>{handleChange('location',e)}}/>
                              <input type="button" value="Next" onClick={nextHandler}/>
                             
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
                            <input defaultValue={value1.history} id="appoiHistory"  onChange={(e)=>{handleChange('history',e)}}/>  
                            <input defaultValue={value1.problem} id="appoiProblem"  onChange={(e)=>{handleChange('problem',e)}}/>  

                              <input type="button" value="Next" onClick={nextHandler}/>
                              <input type="button" value="Prev" onClick={prevHandler}/>

                    </div>
          )

}

function Step3(props){
    //backend must have gone here
    
    function nextHandler(e){
        e.preventDefault();
        props.nextStep();
}

function prevHandler(e){
        e.preventDefault();
        props.prevStep();

}
    var value1= {...props.value1}
          return(
                    <div>
                              <ul id="toConfirm">
                                  <li key="1">{value1.name}</li><br/>
                                  <li key="2">{value1.pNo}</li><br/>
                                  <li key="3">{value1.location}</li><br/>
                                  <li key="4">{value1.history}</li><br/>
                                  <li key="5">{value1.problem}</li><br/>

                              </ul>
                              <input type="button" value="Confirm" onClick={nextHandler}/>
                              <input type="button" value="Prev" onClick={prevHandler}/>
                    </div>
          )

}

function Step4(props){
    

          return(
                    <div id="success">
                            <h1>Thank You for your submission</h1>
                            <p>Will email you shortly!</p>
                    </div>
          )

}



export default AppoiCalendar;
