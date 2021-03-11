import React from 'react';
import moment from 'moment';

const ReviewSummary = ({review}) => {
  return(
    <div className="card z-depth-0 review-summary">
      <div className="card-content red-text grey lighten-2 text-darken-3">
        <span className="card-title"><h3>{review.title}</h3></span>
        <p>Posted by {review.authorFirstName} {review.authorLastName} </p>
        <p className="grey-text">{moment(review.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ReviewSummary;