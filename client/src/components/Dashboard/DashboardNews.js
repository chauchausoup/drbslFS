import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from'axios';


function DashboardNews(){
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
            axios
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

      }

return(
      <div id="news_dashboard">

      <form id="recent_news" onSubmit={submitHandler}>
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


      </form>
</div>
)
}

export default DashboardNews;
