import { LOAD_HOTELS, SET_SORT1, SET_SORT2 } from '../actions/types.js';

const initialState = {
  hotels: null,
  sortType: "default",
  sortOrder: "asc"
}


export default(state = initialState, action) => {
  switch(action.type){

    case LOAD_HOTELS:
      return{
        ...state,
        hotels: action.payload
      }
      
    case SET_SORT1:
      return{
        ...state,
        sortType: action.payload
      }

    case SET_SORT2:
      return{
        ...state,
        sortOrder: action.payload
      }

    default:
    return state;
  }

}