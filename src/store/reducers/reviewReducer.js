const initState = {
  reviews: [
    {id: '1', title: 'The Cecil Hotel', content: 'Los Angeles, California'},
    {id: '2', title: 'The Idanha', content: 'Boise, Idaho'}
  ]
}

const reviewReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_REVIEW":
      console.log('created review', action.review)
      return state;
    case 'CREATE_REVIEW_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;  
  }
}

export default reviewReducer;