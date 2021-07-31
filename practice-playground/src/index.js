import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

import { ThemeContextProviderClass } from './components/Context';

ReactDOM.render(
  <ThemeContextProviderClass>
    <App />
  </ThemeContextProviderClass>,
  document.getElementById('root'),
);

reportWebVitals();