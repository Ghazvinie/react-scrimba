import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from '../src/components/Provider';

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root'),
);

