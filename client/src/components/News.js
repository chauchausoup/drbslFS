import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import newsDate from "../data/news";
function News2() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={"/news/:newsId"} exact component={SingleMost} />
          <Route path={"/news/:newsId/delete"} component={SingleMostDelete} />
          

          <Route path={"/news"} exact component={News} />


        

        </Switch>
      </Router>
    </div>
  );
}

export default News2;

function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/news");

      setNewsData(result.data.items);
    };

    fetchData();
  }, []);

  return newsData.map((newz, index) => {
    console.log(newz);
    const id = newz.id;

    return (
        
        <Link to={`/news/${id}`} style={{ textDecoration: "none" }} key={id}>
        <div id="newz" key={id}>
          <label id="news-title">{newz.title}</label>
          <br />
          <label id="news-content">{newz.content.split(" ").splice(0,40).join(" ")}</label>
          <br />
          <label id="news-date">{newz.date}</label>
          <br />
        </div>
      </Link>
      
    );
  });
}

//get single most component


function SingleMost(props) {
  const [singleMost, setSingleMost] = useState([]);
  let history = useHistory();

  console.log(props.location.pathname);

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
          setSingleMost(response.data.item);
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

  return (
    <>
    <Router>
      <Switch>
      <Route  path={"/news/:newsId/edit"} render={() => <SingleMostEdit myProp={singleMost} />} />
      </Switch>
        
    <div key={singleMost._id}>
     

      <h2>{singleMost.title}</h2>
      <br />
      <p>{singleMost.content}</p>
      <br />
      <strong>{singleMost.date}</strong>
      
      <br />

      <Link to={`/news/`} style={{ textDecoration: "none" }}>
        <input type="button" value="GO BACK" /><br/>
      </Link>
      <Link to={`/news/${singleMost._id}/edit`} style={{ textDecoration: "none" }}>
        <input type="button" value="EDIT" /><br/>
      </Link>
      <Link to={`/news/${singleMost._id}/delete`} style={{ textDecoration: "none" }}>
        <input type="button" value="DELETE" /><br/>
      </Link>
    </div>
    </Router>

    </>

  );
}

// single most delete componenet

function SingleMostDelete(props){
  let history = useHistory();

   const newsDelete=(e)=>{
    e.preventDefault();
    const fetchData = async () => {
      axios
        .delete("", {
          params: {
            ID: props.location.pathname,
          },
        })
        .then(function (response) {
          
          history.push('/news')
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
        <input type="button" value="YES" onClick={newsDelete}/><br/>
    <Link to={`/news/`} style={{ textDecoration: "none" }}>
        <input type="button" value="NO" /><br/>
      </Link>

  </div>
)
}

//single most edit componenet

function SingleMostEdit(props){
  let history = useHistory();
      
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
         /*    Object.keys(editInfo).forEach((key)=>{
              if(key!=="_id"){
                console.log(key,editInfo[key])

                params =params.push({
                  key:editInfo[key]
                  });
              }
            }) */

           
            axios
            .patch(`/news/${editInfo._id}`,params)
            .then((res)=>{
                  console.log(res);

                  if(res.status===200){
                        history.push('/news')

                  }
                  
            })
            .catch(err=>{
                  console.log(err)
            });
 
  }
 
return(
  <div> 
    <form id="recent_news_edit">
            <h3>
                  Add Recent News
            </h3>
            <label>
                  Title:
            </label>
            <input type="text" name="title" value={editInfo.title} id="news_title" onChange={editHandler}/><br/>
            <label>
                  Date:
            </label>
            <input type="text" name="date" value={editInfo.date} id="news_date" onChange={editHandler} /><br/>
            <label>
                  Body:
            </label>
            <textarea name="content" value={editInfo.content} id="news_body" onChange={editHandler} /><br/>
            
            
      <button type="submit" onClick={submitHnadler}>Submit</button>

    <Link to={`/news/`} style={{ textDecoration: "none" }}><input type="button" value="GO BACK"/></Link> 


      </form>

  </div>
  )
  }