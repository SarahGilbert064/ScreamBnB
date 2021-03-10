import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const HotelDetails = (props) => {
  const { hotel, auth } = props;
    if(!auth.uid) return <Redirect to='/signin' />
  if (hotel) {
    return (
    <div className="container section hotel-details center">
      <div className="card red-text text-darken-3 z-depth-0">
        <div className="car-history">
          <span className="card-name"><h4>{hotel.name}</h4></span>
            <h6>{ hotel.location }</h6>
            <p>{ hotel.history }</p>

          <div className="card-action grey lighten-4 black-text">
            <p>{ hotel.toBook }</p>
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