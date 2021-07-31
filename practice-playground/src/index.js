import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

import { ThemeContext } from './components/Context';

ReactDOM.render(
  <ThemeContext.Provider value={'light'}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById('root'),
);

reportWebVitals();