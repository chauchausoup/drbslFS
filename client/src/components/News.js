import React from "react";
import axios from 'axios';
import {useEffect,useState} from 'react';

//import newsDate from "../data/news";

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
    return (
      <div id="newz" key={index}>
        <label id="news-title">{newz.title}</label>
        <br />
        <label id="news-content">{newz.content}</label>
        <br />
        <label id="news-date">{newz.date}</label>
      </div>
    );
  });
}

export default News;
