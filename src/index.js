import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/material-design-lite/material.min.css';
import '..//node_modules/material-design-lite/material.min.js';
import '../src/assets/styles/material-design-lite-templates-article.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
