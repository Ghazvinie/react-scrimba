import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


const MyList = () => (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
)

ReactDOM.render(
  <MyList />,
  document.getElementById('root'),
);

reportWebVitals();