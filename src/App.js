import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import HotelDetails from './components/hotel/HotelDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/hotel/:id" component={HotelDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
