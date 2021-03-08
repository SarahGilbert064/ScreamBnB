import React from 'react';
import HotelSummary from './HotelSummary';

const HotelList = () => {
  return (
    <div className="hotel-list section">
      <HotelSummary />
      <HotelSummary />
      <HotelSummary />
      <HotelSummary />
    </div>
  )
}

export default HotelList;