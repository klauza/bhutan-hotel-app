import {SET_RESERVATION_DATES, SET_RESERVATION_APARTMENT, SET_TRIP} from './types';

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

export const setTrip = (trip) => async dispatch => {
  dispatch({
    type: SET_TRIP,
    payload: trip
  })
} 