import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from '../src/views/Routes/Routes';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Routes} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
