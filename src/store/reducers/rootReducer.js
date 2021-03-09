import authReducer from './authReducer';
import reviewReducer from './reviewReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; 
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  review: reviewReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;