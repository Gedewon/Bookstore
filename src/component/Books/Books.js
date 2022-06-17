import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

function Books({ BooksList }) {
  return (
    <section>
      { Object.keys(BooksList).map((book) => (
        <Book
          key={`book_${book}`}
          id={book}
          title={BooksList[book][0].title}
          author={BooksList[book][0].author}
        />
      ))}
    </section>
  );
}

Books.propTypes = {
  BooksList: PropTypes.shape({
    item_id: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Books;
