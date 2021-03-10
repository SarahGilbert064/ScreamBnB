import React, { Component } from 'react';
import HotelSummary from './HotelSummary';
import { Link } from 'react-router-dom';
import HotelDetails from './HotelDetails';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const HotelList = ({hotels}) => {
  
  return (
    <div className="hotel-list section">
      { hotels && hotels.map(hotel => {
        return(
          <div className="hotel-name container">
            <h4>{hotels.name}</h4>
            <h4>{hotels.location}</h4>
          </div>
        )
      })}
      { hotels && hotels.map(hotel => {
        return (
          <Link to= {'/hotel/' + hotel.id} key={hotel.id}>
            <HotelSummary hotel={hotel}/>
          </Link>
        )
      })}
    </div>
  )
}

export default HotelList;
