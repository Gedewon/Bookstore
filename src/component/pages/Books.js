import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BooksComponent from '../Books/Books';
import InputBook from '../InputBook/InputBook';
import { fetchBooks } from '../../redux/books/books';
function Books() {
  const BookList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchBooks());
  },[])

  return (
    <section>
      <BooksComponent BooksList={BookList} />
      <InputBook />
    </section>
  );
}

export default Books;
