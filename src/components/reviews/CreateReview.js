import React, { Component } from 'react';
import { createReview } from '../../store/actions/reviewActions';
import { connect } from 'react-redux';

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
    // console.log(this.state)
    this.props.createReview(this.state)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Review</h5>
        
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

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (review) => dispatch(createReview(review))
  }
}

export default connect(null, mapDispatchToProps)(CreateReview);
