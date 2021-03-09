import React from 'react';
import ReviewSummary from './ReviewSummary';
import { Link } from 'react-router-dom';

const ReviewList = ({reviews}) => {
  return (
    <div className="review-list section">
      { reviews && reviews.map(review => {
        return (
          <Link to={'/review/' + review.id} key={review.id}>
            <ReviewSummary review={review} />
          </Link>
        )
      })}
    </div>
  )
}

export default ReviewList;