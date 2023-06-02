import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import BooksProvider from './contexts/BooksProvider';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <BooksProvider>
    <App />
  </BooksProvider>
);
