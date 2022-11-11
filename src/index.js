import React from 'react';
import ReactDOM from 'react-dom/client';
import { Todos } from './components/Todos/Todos';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>
);