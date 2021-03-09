import authReducer from './authReducer';
import hotelReducer from './hotelReducer';
import reviewReducer from './reviewReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; 
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  review: reviewReducer,
  hotel: hotelReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;