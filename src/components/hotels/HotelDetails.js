import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const HotelDetails = (props) => {
  const { hotel } = props;
    if(!auth.uid) return <Redirect to='/signin' />
  if (hotel) {
    return (
    <div className="container section hotel-details">
      <div className="card z-depth-0">
        <div className="car-history">
          <span className="card-name">{hotel.name}</span>
          <h5>{ hotel.location }</h5>
          <p>{ hotel.history }</p>
          <p>{ hotel.toBook }</p>
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