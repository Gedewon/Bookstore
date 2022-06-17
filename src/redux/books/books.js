
import axios from "axios";
const ADD = 'BOOKSTORE/books/ADD';
const REMOVE = 'BOOKSTORE/books/REMOVE';
const FETCH_BOOK = 'BOOKSTORE/books/FETCH_BOOK';

export default (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = (payload) => ({ type: ADD, payload });

export const removeBook = (id) => ({ type: REMOVE, id });

export const fetchUser = (payload) =>({type:FETCH_BOOK , payload});


export const fetchBooks = ()=>(dispatch,getState,BASE_URL)=>{
    return axios.get(`${BASE_URL}/books`) 
                .then( data => {
                  console.log(data);
                  dispatch({ type: ADD, data})});
  }
  


