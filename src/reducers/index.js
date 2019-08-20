import { combineReducers } from 'redux';
import sortingReducer from './sortingReducer';


export default combineReducers({
  sort: sortingReducer
});