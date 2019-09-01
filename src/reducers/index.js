import { combineReducers } from 'redux';
import sortingReducer from './sortingReducer';
import reservationReducer from './reservationReducer';
import alertReducer from './alertReducer';


export default combineReducers({
  sort: sortingReducer,
  reservation: reservationReducer,
  alerts: alertReducer
});