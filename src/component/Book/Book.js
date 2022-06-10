import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <section>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button">Remove</button>
    </section>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
