const initState = {
  // hotels: [
  //   {id: '1', name: 'The Cecil Hotel', location: 'Los Angeles, California', history: 'The Cecil Hotel opened on December 20th, 1924. The 19-floor hotel has 700 guest rooms, with majority of the hotel being a budget friendly option for travelers. However, the hotel has a checkered history, with many suicides and deaths occurring here. As of 2017, it was closed for renovations. The Cecil will be back and open for business in 2022.'},
  //   {id: '2', name: 'The Idanha', location: 'Boise, Idaho', history: 'this is history' }
  // ]
}

const hotelReducer = (state = initState, action) => {
  // switch (action.type) {
  //   case 'SHOW_HOTEL':
  //     console.log('show hotel', action.hotel)
  //     return state;
  //   case 'SHOW_HOTEL_ERROR':
  //     console.log('show hotel error', action.err);
  //     return state;
  //   default:
      return state;    
}


export default hotelReducer;