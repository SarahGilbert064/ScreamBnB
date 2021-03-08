import authReducer from './authReducer';
import reviewReducer from './reviewReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; 

const rootReducer = combineReducers({
  auth: authReducer,
  review: reviewReducer,
  firestore: firestoreReducer
})

export default rootReducer;