import { combineReducers } from "redux";
import books from '../redux/books/books';
import categories from '../redux/categories/categories';


const rootReducer = combineReducers({
books,
categories
})


export default rootReducer;