import React from 'react';
import '../styles/Handlers.scss'
import {Link} from 'react-router-dom';
import newsDate from '../data/news';


function AppoiCalendar(){
return(
          <div className="handlers">
                    
                              <div id="facebook">

                              here is the fb
                              </div>

                              <div id="news">
                              
                                        <News/>
                              <Link to ="/news" id="seeMore">See More</Link>
                              </div>


                    
          </div>
)
}
          
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

export default AppoiCalendar;
