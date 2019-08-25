import { LOAD_HOTELS, SET_SORT1, SET_SORT2, PAGE_LOC, SET_LOADING } from './types.js';
import data from '../components/pages/Hotels-children/HotelsData.js';

export const loadHotels = () => async dispatch => {
  setLoading();
  dispatch({
    type: LOAD_HOTELS,
    payload: data.hotels
  })
}

export const sortByType = (type) => async dispatch => {
  dispatch({
    type: SET_SORT1,
    payload: type
  })
}

export const sortByOrder = (order) => async dispatch => {
  // const sortDirection = sortParams.direction === "desc" ? "asc" : "desc";  // Check, what direction now should be
  dispatch({
    type: SET_SORT2,
    payload: order
  })
}

export const pageLocation = (id) => async dispatch => {
  setLoading();
  dispatch({
    type: PAGE_LOC,
    payload: id
  })
}

export const setLoading = () => async dispatch => {
  dispatch({
    type: SET_LOADING
  })
}