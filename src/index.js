import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Routes } from 'react-router-dom';
import BookStore from './BookStore';
import {legacy_createStore as createStore} from 'redux';
import rootReducer from './redux/configureStore';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes>
        <BookStore />
      </Routes>
    </React.StrictMode>
  </Provider>
  ,
);
