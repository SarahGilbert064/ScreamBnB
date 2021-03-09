const initState = {
  hotels: [
    {id: '1', name: 'The Cecil Hotel', content: 'Los Angeles, California'},
    {id: '2', name: 'The Idanha', content: 'Boise, Idaho'}
  ]
}

const hotelReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_HOTEL':
      console.log('show hotel', action.hotel)
      return state;
    case 'SHOW_HOTEL_ERROR':
      console.log('show hotel error', action.err);
      return state;
    default:
      return state;    
  }
}

export default hotelReducer;