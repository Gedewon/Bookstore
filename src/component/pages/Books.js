import React from 'react';
import BooksComponent from '../Books/Books';
import InputBook from '../InputBook/InputBook';

function Books() {
  return (
    <section>
      <BooksComponent BooksList={[]} />
      <InputBook />
    </section>
  );
}

export default Books;
