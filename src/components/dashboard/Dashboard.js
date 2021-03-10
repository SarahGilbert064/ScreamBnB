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

        <div className="row">
          <div className="col s12 m6 center">
          <img src={logo} width="350" height="300"/>
            <HotelList hotels={hotels}/>
          </div>
          
          <div className="col s12 m5 offset-m1">
            <ReviewList reviews={reviews} />
          </div>
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