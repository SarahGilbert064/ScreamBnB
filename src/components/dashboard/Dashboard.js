import React, { Component } from 'react';
import Reviews from './Reviews';
import HotelList from '../hotel/HotelList';

class Dashboard extends Component {
  render(){
    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"> 
            <HotelList />
          </div>

          <div className="col s12 m5 offset-m1">
            <Reviews />
          </div>
          
        </div>
      </div>
    )
  }
}

export default Dashboard;