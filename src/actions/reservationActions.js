import {SET_RESERVATION_DATES, SET_RESERVATION_APARTMENT} from './types';

export const setCalendarDates = (dates) => async dispatch => {
  dispatch({
    type: SET_RESERVATION_DATES,
    payload: dates
  })
}

export const setApartment = (apartment) => async dispatch => {
  dispatch({
    type: SET_RESERVATION_APARTMENT,
    payload: apartment
  })
}