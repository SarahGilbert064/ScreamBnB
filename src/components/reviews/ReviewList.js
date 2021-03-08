import React from 'react';
import ReviewSummary from './ReviewSummary';

const ReviewList = ({reviews}) => {
  return (
    <div className="review-list section">
      { reviews && reviews.map(review => {
        return (
          <ReviewSummary review={review} key={review.id} />
        )
      })}
    </div>
  )
}

export default ReviewList;