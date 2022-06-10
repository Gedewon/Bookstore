import React from 'react'
import DefaultLayout from './component/Layout/DefaultLayout'
import { Routes, Route } from "react-router-dom";
import Books from './component/pages/Books';
import Categories from './component/pages/Categories';

function BookStore() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path='/' element={<Books />} >
          <Route path='books' element={<Books />} />
          <Route path='categories' element={<Categories />} />
        </Route>
      </Routes>
    </DefaultLayout>
    
  )
}

export default BookStore