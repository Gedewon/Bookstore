import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Routes } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './redux/configureStore';
import BookStore from './BookStore';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk,logger),
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
