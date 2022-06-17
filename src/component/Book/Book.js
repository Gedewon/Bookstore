import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import style from './Book.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <section className={style.BooksPanel}>
      <section className={style.BookDetailSection }>
          <span className={`${style.Genera} ${style.TextStyle5}`}>Action</span>
          <span className={style.Title}>{title}</span>
          <span className={`${style.Author} ${style.TextStyle6}`}>{author}</span>
          <section className={style.LinkSection}>
                <a type="button" className={`${style.Comments} ${style.Comments}`}>Comments</a>
                <div className={style.Line2}></div>
                <a type="button" className={`${style.Comments} ${style.Comments}`} onClick={handleRemove}>Remove</a>
                <div className={style.Line2}></div>
                <a type="button" className={`${style.Comments} ${style.Comments}`} >Edit</a>
          </section>
      </section>
      <section className={style.progress}>
          <CircularProgressbar value={Math.ceil(85*Math.random())}   />
      </section>
      <section className={style.percentageCompleted}>
        <span>{Math.ceil(100*Math.random())}% </span>
        <span className={style.completed}>
          Completed
        </span>
      </section>
      <div className={style.LineBig}></div>
      <section className={style.section3}>
      <span className={style.currentChapter}>
          Current Chapter
        </span>
        <span className={style.Chapters}>
          Chapter 17
        </span>
        <a className={style.updateProgress}>
          <span className={style.updateText}>
          Update progress
          </span>
        </a>
      </section>
    </section>
  );
}
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
