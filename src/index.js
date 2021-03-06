import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './redux/configureStore';
import BookStore from './BookStore';
import './index.css';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/stJtLUEsDBgD97TvJSFm/books';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(BASE_URL), logger),
));

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
