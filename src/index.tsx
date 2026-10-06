import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './app'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
