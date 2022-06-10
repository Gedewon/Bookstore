import React from 'react';

function InputBook() {
  return (
    <footer>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </footer>
  );
}

export default InputBook;
