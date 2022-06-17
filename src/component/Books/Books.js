import React from 'react';
import PropTypes, { object } from 'prop-types';
import Book from '../Book/Book';

function Books({ BooksList }) {
  return (
    <section>
      { Object.keys(BooksList).map(book=>{
return <Book key={`book_${book}`} id={BooksList[book][0].item_id} title={BooksList[book][0].title} author={BooksList[book][0].author} />
      })}

      {/* { BooksList.map((book) => <Book key={`book_${book.category}`} id={book.item_id} title={book.title} author={book.author} />)} */}
    </section>
  );
}


Books.propTypes = {
  BooksList: PropTypes.instanceOf(object).isRequired,
};

export default Books;
