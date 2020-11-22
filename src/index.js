//Load nodejs  มาด้วย 
//https://docs.google.com/document/d/1-Tq4F3CjscvKC81eDZ4txk_7GxmkmBqJGAjqlgxWo3I/edit#
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { AppProvider } from './context/AppContext';
import './firebase';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
