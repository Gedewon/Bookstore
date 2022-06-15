const CHECK_STATUS = 'BOOKSTORE/books/CHECK_STATUS';

export default (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ['Under construction'];
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: CHECK_STATUS });
