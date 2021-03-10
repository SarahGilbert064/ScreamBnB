import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ReviewDetails from './components/reviews/ReviewDetails';
import HotelDetails from './components/hotels/HotelDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateReview from './components/reviews/CreateReview';
import HotelList from './components/hotels/HotelList';
import HotelSummary from './components/hotels/HotelSummary';
import BrowseHotels from './components/dashboard/BrowseHotels';
import CommunityBoard from './components/dashboard/CommunityBoard';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/review/:id" component={ReviewDetails}/>
            <Route path="/hotel/:id" component={HotelDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/browsehotels' component={BrowseHotels}/>
            <Route path='/communityboard' component={CommunityBoard}/>
            <Route path='/create' component={CreateReview}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
