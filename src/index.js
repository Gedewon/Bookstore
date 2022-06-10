import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BookStore from './BookStore';
import { BrowserRouter  as Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes>
      <BookStore />
    </Routes>
  </React.StrictMode>,
);
