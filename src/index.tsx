import React from 'react';
import ReactDOM from 'react-dom/client';
import CardApp from './card-app';
import './fonts/credit-card.otf';
import "./card-app.css"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <CardApp />
  </React.StrictMode>
);
