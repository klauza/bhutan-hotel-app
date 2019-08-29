import { combineReducers } from 'redux';
import sortingReducer from './sortingReducer';
import calendarReducer from './calendarReducer';


export default combineReducers({
  sort: sortingReducer,
  calendar: calendarReducer
});