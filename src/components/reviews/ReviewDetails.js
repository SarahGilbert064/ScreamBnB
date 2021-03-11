import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from "react-router-dom";
import logo from '../../img/logo.png';
import moment from 'moment';

const ReviewDetails = (props) => {
  const { review, auth } = props;
    if(!auth.uid) return <Redirect to='/signin' />
  if (review) {
    return (
    <div className="container section hotel-details center">
      <img src={logo} width="230" height="185"/>
      <div className="card red-text text-darken-3 grey lighten-2 z-depth-0" id="card-history">
        <div className="card-review">
          <span className="card-span" id='card-title'><h3>{ review.title }</h3></span>
          <p>{ review.location }</p>
          <h4>{ review.content }</h4>
        </div>
        <div className="card-action grey darken-3 black-text">
          <div>Posted by { review.authorFirstName} { review.authorLastName }</div>
          <div>{moment(review.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading reviews.....</p>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const reviews = state.firestore.data.reviews
  const review = reviews ? reviews[id] : null
  return {
    review: review,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reviews' }
  ])
)(ReviewDetails)
