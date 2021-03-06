import React, { Component } from 'react';
import ReviewList from '../reviews/ReviewList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import HotelList from '../hotels/HotelList';
import logo from '../../img/logo.png';
// import HotelDetails from '../hotels/HotelDetails';

class Dashboard extends Component {
  render(){

    const { reviews, hotels, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return(
      <div className="dashboard container">
        <div className="row center">
          <img src={logo} width="450" height="400"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.firestore.ordered.reviews,
    hotels: state.firestore.ordered.hotels,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([
    { collection: 'reviews', orderBy: ['createdAt', 'desc']},
    { collection: 'hotels' }
  ])
)(Dashboard);