import authReducer from './authReducer';
import reviewReducer from './reviewReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  review: reviewReducer
})

export default rootReducer;