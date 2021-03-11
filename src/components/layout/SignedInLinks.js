import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
  return(
    <ul className="right">
      <li><NavLink to="/browsehotels"><a class="waves-effect pink darken-3 z-depth-4 btn">Browse Our Hotels</a></NavLink></li>
      <li><NavLink to="/communityboard"><a class="waves-effect pink darken-3 z-depth-4 btn">Community Board</a></NavLink></li>
      <li><NavLink to="/create"><a class="waves-effect pink darken-3 z-depth-4 btn">Leave A Message</a></NavLink></li>
      <li><a onClick={props.signOut}><a class="waves-effect pink darken-3 z-depth-4 btn">Log Out</a></a></li>
      <li><NavLink to="/" className = "btn btn-floating red darken-3">
        { props.profile.initials } 
      </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);