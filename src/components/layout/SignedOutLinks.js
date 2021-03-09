import React from 'react';
import { NavLink } from "react-router-dom";
import HotelList from '../hotels/HotelList';

const SignedOutLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to="/hotelList">Browse Our Hotels</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
      <li><NavLink to="/signin">Login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;