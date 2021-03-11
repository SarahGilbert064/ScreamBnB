import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import logo from '../../img/logo.png';
import storage from '../../config/fbConfig';

const HotelDetails = (props) => {
  const { hotel, auth } = props;
    if(!auth.uid) return <Redirect to='/signin' />
  if (hotel) {
    return (
    <div className="container section hotel-details center">
      <img src={logo} width="230" height="185"/>
      <div className="card red-text text-darken-3 grey lighten-2 z-depth-0">
        <div className="card-history">
          <span className="card-name"><h4>{hotel.name}</h4></span>
            <h6>{ hotel.location }</h6>
            <p>{ hotel.history }</p>
            <img src={hotel.imgUrl} max-width="100" max-height="100"></img>

          <div className="card-action grey darken-3 black-text">
            <p>{hotel.bookInfo}</p>
            <a href={hotel.link}>Click here to book!</a>
          </div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div className='container center'>
        <p>Loading Hotels...</p>
      </div>
    )
  } 
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id 
  const hotels = state.firestore.data.hotels 
  const hotel = hotels ? hotels[id] : null
  return {
    hotel: hotel,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'hotels' }
  ])
)(HotelDetails)