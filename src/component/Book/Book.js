import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
function Book({ id,title, author }) {
  const dispatch = useDispatch();
  const handleRemove =()=>{
    dispatch(removeBook(id));
  }
  return (
    <section>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button" onClick={handleRemove}>Remove</button>
    </section>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
