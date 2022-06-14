import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
function Book({ id,title, author }) {
  const dispatch = useDispatch();
  return (
    <section>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button" onClick={(id)=>dispatch(removeBook(id))}>Remove</button>
    </section>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
