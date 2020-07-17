import React from "react";
import axios from 'axios';
import {useEffect,useState} from 'react';
import { useHistory } from "react-router";
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';


//import newsDate from "../data/news";
function News2(){
    return(
        <div>
             <Router>
            
                <Switch>
                    <Route  path ={'/news/:newsId'} component={SingleMost}/>
                    <Route path ={'/news'} exact component={News}/>

                </Switch>
      
            </Router>
        </div>
    )
}

function News() {


  const[newsData,setNewsData]=useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/news',
      );
        
      
      setNewsData(result.data.items)

     
    };
    
 
    fetchData();
  }, []);


 



  return newsData.map((newz, index) => {
   
console.log(newz);

     return (

    
       <>
      <SingleNews newz={newz} key={newz.id}/>
      
      </>
    ); 
  });
  
}

export default News2;

function SingleNews(props){

  const id = props.newz.id;

  

return(
  
 <>
 


    <Link to = {`/news/${id}`} style={{"textDecoration":"none"}}>
    <div id="newz" >
        <label id="news-title">{props.newz.title}</label>
        <br />
        <label id="news-content">{props.newz.content}</label>
        <br />
        <label id="news-date">{props.newz.date}</label>
        <br/>
     
      </div>

    </Link>
   

</>
  
)
}

 function SingleMost(props){
  const[singleMost,setSingleMost]=useState([]);
 let history = useHistory();

  console.log(props.location.pathname)

// singleMost.data.items.url

  useEffect(() => {
    const fetchData = async () => {
      axios.get('', {
        params: {
          ID: props.location.pathname
        }
      })
      .then(function (response) {
        setSingleMost(response.data.item)
       // history.push(`${props.location.pathname}`)

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

return(
  <div>
  <h2>{singleMost.title}</h2><br/>
  <p>{singleMost.content}</p><br/>
  <strong>{singleMost.date}</strong><br/>
  
  <Link to = {`/news/`} style={{"textDecoration":"none"}}><input type="button" value="go back"/></Link>

  </div>
)
}

