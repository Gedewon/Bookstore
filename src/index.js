import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Routes } from 'react-router-dom';
import BookStore from './BookStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <BookStore />
    </Routes>
  </React.StrictMode>,
);
