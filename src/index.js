import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, } from 'react-router-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import UserProvider from './providers/UserProvider';
import HobbiesProvider from './providers/HobbiesProvider';

ReactDOM.render(
  <UserProvider>
    <HobbiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HobbiesProvider>
  </UserProvider>,
  document.getElementById('root')
);
