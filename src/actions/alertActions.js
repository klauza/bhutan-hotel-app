import { SET_ALERT, REMOVE_ALERT } from './types';
 


 // Set alert
 export const  setAlert = (msg, type, timeout = 3000) => async dispatch => {
  const id = Math.random();
  
  dispatch({
    type: SET_ALERT,
    payload: { msg, type, id}
  });

  // disappearing:
  setTimeout(() => dispatch ({ 
    type: REMOVE_ALERT, payload: id
  }), timeout)
 }