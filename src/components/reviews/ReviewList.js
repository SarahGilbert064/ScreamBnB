import React from 'react';
import ReviewSummary from './ReviewSummary';

const ReviewList = () => {
  return (
    <div className="review-list section">
      <ReviewSummary />
      <ReviewSummary/>
      <ReviewSummary />
      <ReviewSummary />
    </div>
  )
}

export default ReviewList;