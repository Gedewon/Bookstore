import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import style from './InputBook.module.css';

function InputBook() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
      category: 'Fiction',
    }));
  };

  return (
    <>
      <div className={style.line} />
      <footer>
        <span className={style.Title}>ADD NEW BOOK</span>
        <form onSubmit={handleSubmit}>
          <input className={`${style.LessonPanel} ${style.Title}`} type="text" name="title" placeholder="Book title" />
          <input className={style.LessonPanel2} type="text" name="author" placeholder="Author" />
          <button className={`${style.RectangleButton} ${style.ADDBOOK}`} type="submit">
            ADD BOOK
          </button>
        </form>
      </footer>
    </>
  );
}

export default InputBook;
