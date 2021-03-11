import React from 'react';

const HotelSummary = ({hotel}) => {

  const hotelStyles = {
    backgroundColor: 'red'
  }

  return (
    <div className="card z-depth-0 hotel-summary center">
      <div className="card-content red-text grey lighten-2 text-darken-3">
        <span className='card-name'><h4>{hotel.name}</h4></span>
        <h6>Location: {hotel.location}</h6>
      </div>
    </div>
  )
}

export default HotelSummary;