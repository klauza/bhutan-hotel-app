import {SET_CALENDAR_DATES} from '../actions/types';

const initialState = {
  dates: null
}

export default(state = initialState, action) => {
  switch(action.type){

    case SET_CALENDAR_DATES:
      return{
        ...state,
        dates: action.payload
      }

    default:
    return state;
  }
}