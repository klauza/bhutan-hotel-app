import { combineReducers } from 'redux';
import sortingReducer from './sortingReducer';
import reservationReducer from './reservationReducer';


export default combineReducers({
  sort: sortingReducer,
  reservation: reservationReducer
});