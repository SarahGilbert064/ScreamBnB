import React from 'react'

const ReviewDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section hotel-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Review Title - { id }</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam neque recusandae voluptatum nulla distinctio temporibus pariatur fuga ipsam, earum optio ipsum. Enim asperiores esse aspernatur, omnis obcaecati reiciendis ipsam.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by ScreamBnB</div>
          <div>3/8/2021</div>
        </div>
      </div>
    </div>
  )
}

export default ReviewDetails
