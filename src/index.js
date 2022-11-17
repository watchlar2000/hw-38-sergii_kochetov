import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Todos from './components/Todos';
import './index.css';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todos />
    </Provider>
  </React.StrictMode>
);
