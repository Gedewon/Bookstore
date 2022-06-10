import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookStore from './BookStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookStore />
  </React.StrictMode>,
);
