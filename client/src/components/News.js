import React from 'react';
import newsDate from '../data/news';

function News(){
      return(
                newsDate.map((newz,index)=>{
                          return(
                          <div id="newz" key={index}>
                                    <label id="news-title">{newz.title}</label><br/>
                                    <label id="news-content">{newz.content}</label><br/>
                                    <label id="news-date">{newz.date}</label>
                          </div>
                          )
                })
               
      )
}

export default News;
