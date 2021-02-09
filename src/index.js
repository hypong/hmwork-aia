import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from "./contexts/AuthContext"

ReactDom.render(
  <AuthProvider>
    <App />
  </AuthProvider>
  , document.getElementById("root"))