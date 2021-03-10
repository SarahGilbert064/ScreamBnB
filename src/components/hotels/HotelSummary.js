import React from 'react';

const HotelSummary = ({hotel}) => {
  return (
    <div className="card z-depth-0 hotel-summary center">
      <div className="card-content red-text text-darken-3">
        <span className='card-name'><h4>{hotel.name}</h4></span>
        <h6>Location: {hotel.location}</h6>
        {/* <p>{hotel.history}</p> */}
      </div>
    </div>
  )
}

export default HotelSummary;