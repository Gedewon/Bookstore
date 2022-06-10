import React from 'react'
import Books from '../Books/Books'
import InputBook from '../InputBook/InputBook'
function Books() {
  return (
    <section>
        <Books BooksList={[]}/>
        <InputBook />
    </section>
  )
}

export default Books