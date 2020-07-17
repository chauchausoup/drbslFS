import React from "react";
import "../styles/Handlers.scss";
import { Link } from "react-router-dom";

import axios from 'axios';
import {useEffect,useState} from 'react';
function AppoiCalendar() {
  return (
    <div className="handlers">
      <div id="facebook">here is the fb</div>

      <div id="news">
        <News />
        <Link to="/news" id="seeMore">
          See More
        </Link>
      </div>
    </div>
  );
}

function News() {
  const[newsDate,setNewsDate]=useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/news',
      );
 
      setNewsDate(result.data.items);
    };
 
    fetchData();
  }, []);

  return newsDate.map((newz, index) => {
    if(index<=1){
      return (
        <div id="newz" key={index}>
          <label id="news-title">{newz.title}</label>
          <br />
          <label id="news-content">{newz.content.split(" ").splice(0,10).join(" ")}</label>
          <br />
          <label id="news-date">{newz.date}</label>
        </div>
      );
    }else{
      return;
    }
  
  });
}

export default AppoiCalendar;
