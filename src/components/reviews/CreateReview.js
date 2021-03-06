import React, { Component } from 'react';
import { createReview } from '../../store/actions/reviewActions';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import logo from '../../img/logo.png';

class CreateReview extends Component {
  state = {
    title: '',
    location: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createReview(this.state)
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container center">
        <img src={logo} width="250" height="200"/>
        <form onSubmit={this.handleSubmit} className="white">
        <h5 className="red-text text-darken-3">Share Some Spooky Stuff!</h5>
        
        <div className="input-field">
          <label htmlFor="title">Title of Review</label>
          <input type="text" id='title' onChange={this.handleChange}/>
        </div>

        <div className="input-field">
          <label htmlFor="location">Location</label>
          <input type="text" id='location' onChange={this.handleChange}/>
        </div>

        <div className="input-field">
          <label htmlFor="content">Review Content</label>
          <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
        </div>
        <div className="input-field">
          <button className="btn purple lighten-1 z-depth">Create</button>
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview);
