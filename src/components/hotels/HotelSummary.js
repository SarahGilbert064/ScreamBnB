import React from 'react';

const HotelSummary = ({hotel}) => {
  
  return (

    <div class="card z-depth-0 hotel-summary center">
        <div class="card-content pink-text grey lighten-2 text-darken-3">
          <span class='card-name'><h3>{hotel.name}</h3></span>
          <h6>Location: {hotel.location}</h6>
        </div>
      </div>

  )
}


export default HotelSummary;