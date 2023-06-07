import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './frontend/App';
import { BrowserRouter } from 'react-router-dom';
import CharacterProvider from './frontend/context/CharacterProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </BrowserRouter>
  );