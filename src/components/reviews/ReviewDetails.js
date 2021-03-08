import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ReviewDetails = (props) => {
  const { review } = props;
  if (review) {
    return (
    <div className="container section hotel-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{ review.title }</span>
          <h5>{ review.location }</h5>
          <p>{ review.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { review.authorFirstName} { review.authorLastName }</div>
          <div>3/8/2021</div>
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
    review: review
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'reviews' }
  ])
)(ReviewDetails)
