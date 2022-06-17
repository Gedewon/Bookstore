import React from 'react';
import PropTypes, { object } from 'prop-types';
import Book from '../Book/Book';

function Books({ BooksList }) {
  return (
    <section>
      { Object.keys(BooksList).map(book=><Book 
            key={`book_${book}`} 
            id={book} 
            title={BooksList[book][0].title} 
            author={BooksList[book][0].author} />
      )}
    </section>
  );
}


Books.propTypes = {
  BooksList: PropTypes.instanceOf(object).isRequired,
};

export default Books;
