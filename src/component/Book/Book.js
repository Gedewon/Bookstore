import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../../redux/books/books';
import style from './Book.module.css';
import 'react-circular-progressbar/dist/styles.css';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <section className={style.BooksPanel}>
      <section className={style.BookDetailSection}>
        <span className={`${style.Genera} ${style.TextStyle5}`}>Action</span>
        <span className={style.Title}>{title}</span>
        <span className={`${style.Author} ${style.TextStyle6}`}>{author}</span>
        <section className={style.LinkSection}>
          <button type="button" className={`${style.Comments} ${style.Comments}`}>Comments</button>
          <div className={style.Line2} />
          <button type="button" className={`${style.Comments} ${style.Comments}`} onClick={handleRemove}>Remove</button>
          <div className={style.Line2} />
          <button type="button" className={`${style.Comments} ${style.Comments}`}>Edit</button>
        </section>
      </section>
      <section className={style.progress}>
        <CircularProgressbar value={Math.ceil(85 * Math.random())} />
      </section>
      <section className={style.percentageCompleted}>
        <span>
          {Math.ceil(100 * Math.random())}
          %
          {' '}
        </span>
        <span className={style.completed}>
          Completed
        </span>
      </section>
      <div className={style.LineBig} />
      <section className={style.section3}>
        <span className={style.currentChapter}>
          Current Chapter
        </span>
        <span className={style.Chapters}>
          Chapter
        </span>
        <button type="button" className={style.updateProgress}>
          <span className={style.updateText}>
            Update progress
          </span>
        </button>
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
