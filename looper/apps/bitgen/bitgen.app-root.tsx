import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BitgenApp } from './app';

ReactDOM.render(
  <BrowserRouter>
    <BitgenApp />
  </BrowserRouter>,
  document.getElementById('root')
);
