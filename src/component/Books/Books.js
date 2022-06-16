import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

function Books({ BooksList }) {
  return (
    <section>
      { BooksList.map((book) => <Book key={`book_${book.category}`} id={book.item_id} title={book.title} author={book.author} />)}
    </section>
  );
}

Books.propTypes = {
  BooksList: PropTypes.instanceOf(Array).isRequired,
};

export default Books;
