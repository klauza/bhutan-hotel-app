import {SET_CALENDAR_DATES} from './types';

export const setCalendarDates = (dates) => async dispatch => {
  dispatch({
    type: SET_CALENDAR_DATES,
    payload: dates
  })
}