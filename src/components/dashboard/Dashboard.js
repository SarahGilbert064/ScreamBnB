import React, { Component } from 'react';
import Notifications from './Notifications';
import ReviewList from '../reviews/ReviewList';

class Dashboard extends Component {
  render(){
    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Notifications/>
          </div>
          
          <div className="col s12 m5 offset-m1">
            <ReviewList />
          </div>
          
        </div>
      </div>
    )
  }
}

export default Dashboard;