import React from 'react';

const HotelSummary = ({hotel}) => {
  return (
    <div className="card z-depth hotel-summary">
      <div className="card-content grey-text text-darken-3">
        <span className='card-name'>{hotel.name}</span>
        <h5>Location: {hotel.location}</h5>
        <p>{hotel.history}</p>
      </div>
    </div>
  )
}

export default HotelSummary;