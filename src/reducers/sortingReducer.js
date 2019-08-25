import { LOAD_HOTELS, SET_SORT1, SET_SORT2, CARD_ID, SET_LOADING } from '../actions/types.js';

const initialState = {
  hotels: null,
  sortType: "default",
  sortOrder: "asc",
  cardId: null,
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
    
    case CARD_ID:
      return{
        ...state,
        loading: false,
        cardId: action.payload
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