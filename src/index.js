import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Context';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  domain="dev-gewa0a3jl7wrik5l.us.auth0.com"
  clientId="NVl6RbqxbhF41Fz02volv6aJ9u50z89I"
  redirectUri={window.location.origin}>

    <Context>
    <App />
    </Context>
  </Auth0Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
