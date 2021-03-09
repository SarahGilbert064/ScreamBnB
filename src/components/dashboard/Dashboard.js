import React, { Component } from 'react';
import Notifications from './Notifications';
import ReviewList from '../reviews/ReviewList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render(){

    const { reviews, auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Notifications/>
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
  console.log(state);
  return {
    reviews: state.firestore.ordered.reviews,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([
    { collection: 'reviews' }
  ])
)(Dashboard);