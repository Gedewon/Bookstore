import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './component/Layout/DefaultLayout';
import Books from './component/pages/Books';
import Categories from './component/pages/Categories';

function BookStore() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="*" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </DefaultLayout>

  );
}

export default BookStore;
