import React from 'react';
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to="/create">Leave a Review</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className = "btn btn-floating purple lighten-1">SG</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;