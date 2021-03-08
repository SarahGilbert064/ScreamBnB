import React from 'react';
import ReviewSummary from './ReviewSummary';
import { Link } from 'react-router-dom';

const ReviewList = ({reviews}) => {
  return (
    <div className="review-list section">
      { reviews && reviews.map(review => {
        return (
          <Link to={'/review/' + review.id}>
            <ReviewSummary review={review} key={review.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default ReviewList;