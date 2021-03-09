import React from 'react';
import HotelSummary from './HotelSummary';
import { Link } from 'react-router-dom';

const HotelList = ({hotels}) => {
  return (
    <div className="hotel-list section">
      
      {/* { hotels && hotels.map(hotel => {
        return (
          <Link to= {'/hotel/' + hotel.id} key={hotel.id}>
            <HotelSummary hotel={hotel}/>
          </Link>
        )
      })} */}
    </div>
  )
}

export default HotelList;