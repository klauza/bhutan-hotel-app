import { LOAD_HOTELS, SET_SORT1, SET_SORT2, PAGE_LOC, SET_LOADING } from '../actions/types.js';

const initialState = {
  hotels: null,
  sortType: "default",
  sortOrder: "asc",
  pageLocY: 0,
  loading: true
}


export default(state = initialState, action) => {
  switch(action.type){

    case LOAD_HOTELS:
      return{
        ...state,
        loading: false,
        hotels: action.payload
      }
      
    case SET_SORT1:
      return{
        ...state,
        loading: false,
        sortType: action.payload
      }

    case SET_SORT2:
      return{
        ...state,
        loading: false,
        sortOrder: action.payload
      }
    
    case PAGE_LOC:
      return{
        ...state,
        loading: false,
        pageLocY: action.payload
      }
    case SET_LOADING:
      return{
        ...state,
        loading: true
      }

    default:
    return state;
  }

}