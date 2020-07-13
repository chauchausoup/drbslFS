import React from 'react';
import '../styles/Carousel.scss';
import { useState,useEffect } from 'react';
/* import ImgComp from './ImgComp'
import i1 from  */





function Carousel(){
          let itemArray = [
          1,
          2,
          3,
          4,
          5];

          const [x,setX]=useState(0);

         var num = ((itemArray.length-1)*(-100))
          

          useEffect(() => {
                    const interval = setInterval(() => {
                              setX(x-100)

                              
                              if(x===num){
                                        setX(0)

                              }    
                    }, 4000);
                    return () => clearInterval(interval);
                  }, [x,num]);
          

          return(
                    <div className="carousel">
                    {
                              itemArray.map((item,index)=>{
                                        return(
                                                  <div key={index} className="item" style={{transform:`translateX(${x}%)`}}>
                                                            {item}
                                                  </div>
                                        )
                              })
                    }
                              
                    </div>
          )
}

export default Carousel;


