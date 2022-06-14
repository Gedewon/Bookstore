import React from 'react';
import { useSelector } from 'react-redux';
import BooksComponent from '../Books/Books';
import InputBook from '../InputBook/InputBook';

function Books() {
  const BookList = useSelector(state=>state.books)
  return (
    <section>
      <BooksComponent BooksList={BookList} />
      <InputBook />
    </section>
  );
}

export default Books;
