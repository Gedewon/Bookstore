import React from 'react'

function Book({title,author}) {
  return (
    <article>
        <span role='title'>{title}</span>
        <span role='author'>{author}</span>
    </article>
  )
}

export default Book