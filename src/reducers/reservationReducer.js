import {SET_RESERVATION_DATES, SET_RESERVATION_APARTMENT, SET_TRIP, SET_CAR, CANCEL_RESERVATION} from '../actions/types';

const initialState = {
  dates: null,
  apartment: null,
  trips: [],
  car: null
}

export default(state = initialState, action) => {
  switch(action.type){

    case SET_RESERVATION_DATES:
      return{
        ...state,
        dates: action.payload
      }

    case SET_RESERVATION_APARTMENT:
      return{
        ...state,
        apartment: action.payload
      }

    case SET_TRIP:
      return{
        ...state,
        trips: [ action.payload, ...state.trips]
      }

    case SET_CAR:
      return{
        ...state,
        car: action.payload
      }

    case CANCEL_RESERVATION:
      return{
        dates: null,
        apartment: null,
        trips: [],
        car: null
      }

    default:
    return state;
  }
}