import React, { Components } from 'react';
import Reviews from './Reviews';

class Dashboard extends Component {
  render(){
    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6"> //this will control how much space this div/comp. takes up on screen. This is for HotelList
            <div className="col s12 m5 offset-m1"> //this is for reviews that users post
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    )
  }
}