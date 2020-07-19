import React from 'react';
import Carousel from './Carousel';
import Boxes from './Boxes';
import Appointment from './AppoiCalendar'
import Handlers from './Handlers';


export default function Middle(){
      return(
            <div>
                        <Carousel/>
                        <Boxes/>
                        <Appointment/>
                        <Handlers/>
            </div>
      )
}
