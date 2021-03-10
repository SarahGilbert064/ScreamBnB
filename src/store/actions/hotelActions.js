// export const showHotel = (hotel) => {
//   return (dispatch, getState, {getFirebase, getFirestore}) => {

//     const firestore = getFirestore();
    
//     firestore.collection('hotels').get({
//       ...hotel,
//       hotelName : hotel.name,
//       hotelLocation : hotel.location,
//       hotelHistory : hotel.history,
//       hotelToBook : hotel.toBook
//     }).then(() => {
//       dispatch({ type: 'SHOW_HOTEL', hotel });
//     }).catch((err) => {
//       dispatch ({ type: 'SHOW_HOTEL_ERROR', err});
//     })
//   }
// };