import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import App from './App';
import './global.scss';
import { AppStateContextProvider } from './AppStateContext/AppStateContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React>
  <AppStateContextProvider>
    <App />
  </AppStateContextProvider>
    
  // </React>
);

