import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

function InputBook() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
    }));
  };

  return (
    <footer>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </footer>
  );
}

export default InputBook;
