import axios from 'axios';

const ADD = 'BOOKSTORE/books/ADD';
const REMOVE = 'BOOKSTORE/books/REMOVE';
const FETCH_BOOK = 'BOOKSTORE/books/FETCH_BOOK';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [action.payload.item_id]: [{
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        }],
      };
    case REMOVE:
      return Object.keys(state)
        .filter((key) => key !== action.id)
        .reduce((obj, key) => Object.assign(obj, {
          [key]: state[key],
        }), {});

    case FETCH_BOOK:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export const addBook = (payload) => (dispatch, _, BASE_URL) => axios({
  method: 'POST',
  url: BASE_URL,
  data: {
    ...payload,
  },
}).then((response) => {
  if (response.status === 201) dispatch({ type: ADD, payload });
});

export const removeBook = (id) => (dispatch, _, BASE_URL) => axios({
  method: 'DELETE',
  url: `${BASE_URL}/${id}`,
}).then((response) => {
  if (response.status === 201) dispatch({ type: REMOVE, id });
});

export const fetchUser = (payload) => ({ type: FETCH_BOOK, payload });

export const fetchBooks = () => (dispatch, _, BASE_URL) => axios.get(`${BASE_URL}`).then(
  (response) => dispatch(fetchUser(response.data)),
);
