import React, { Component } from 'react';
import Notifications from './Notifications';
import ReviewList from '../reviews/ReviewList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render(){
    // console.log(this.props);

    const { reviews } = this.props;

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
  return {
    reviews: state.review.reviews
  }
}

export default connect(mapStateToProps)(Dashboard);