import React from 'react'
import Book from '../Book/Book'
function Books({BooksList}) {
  return (
    <section>
       { BooksList.map(book=> <Book title={book.title} author={book.author}/>)}
    </section>
  )
}

export default Books