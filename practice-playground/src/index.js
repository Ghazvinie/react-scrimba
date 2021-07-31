import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

import { UsernameContext } from './components/Context';

ReactDOM.render(
  <UsernameContext.Provider value={'Daniel'}>
    <App />
  </UsernameContext.Provider>,
  document.getElementById('root'),
);

reportWebVitals();