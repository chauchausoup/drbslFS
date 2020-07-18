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
          <Route path={"/news/:newsId/edit"} component={SingleMostEdit} />
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
        
        <Link to={`/news/${id}`} style={{ textDecoration: "none" }}>
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
          console.log(singleMost)
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>{singleMost.title}</h2>
      <br />
      <p>{singleMost.content}</p>
      <br />
      <strong>{singleMost.date}</strong>
      <br />

      <Link to={`/news/`} style={{ textDecoration: "none" }}>
        <input type="button" value="GO BACK" /><br/>
      </Link>
      <Link to={`/news/${singleMost.id}/edit`} style={{ textDecoration: "none" }}>
        <input type="button" value="EDIT" /><br/>
      </Link>
      <Link to={`/news/${singleMost.id}/delete`} style={{ textDecoration: "none" }}>
        <input type="button" value="DELETE" /><br/>
      </Link>

    </div>
  );
}

// single most delete componenet

function SingleMostDelete(props){
  console.log(props);

return(
  <div> 
   <h1>Are you sure ?</h1>
    <button>yes</button>
    <button>no</button>

  </div>
)
}

//single most edit componenet

function SingleMostEdit(props){
  console.log(props);
  let history = useHistory();
      
  const [newsInfo,setNewsInfo]=useState({
        title:"",
        content:"",
        date:""

  })

  const changeHandler=(e)=>{
        setNewsInfo({
              ...newsInfo,
              [e.target.name]:e.target.value
        })
        console.log(newsInfo)
  }


  const submitHandler=(e)=>{
        e.preventDefault();
        console.log(newsInfo)
        let  params = {
              title:newsInfo.title,
              content:newsInfo.content,
              date:newsInfo.date

        };
       /*  axios
        .post('/admin/news',params)
        .then((res)=>{
              console.log(res);

              if(res.status===200){
                    history.push('/admin')

              }
              
        })
        .catch(err=>{
              console.log(err)
        });
 */
  }
return(
  <div> 
    <form id="recent_news_edit" onSubmit={submitHandler}>
            <h3>
                  Add Recent News
            </h3>
            <label>
                  Title:
            </label>
            <input type="text" name="title" id="news_title" onChange={changeHandler}/><br/>
            <label>
                  Date:
            </label>
            <input type="text" name="date" id="news_date" onChange={changeHandler}/><br/>
            <label>
                  Body:
            </label>
            <textarea name="content" id="news_body" onChange={changeHandler}/><br/>
            
            
      <button type="submit">Submit</button>
<input type="button" value="GO BACK"/>


      </form>

  </div>
)
}