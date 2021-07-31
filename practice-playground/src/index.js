import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { UserContextProvider } from './components/Context';

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
,
  document.getElementById('root'),
);

reportWebVitals();