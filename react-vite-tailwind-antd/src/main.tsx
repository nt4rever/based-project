import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '~/i18n/i18n';
import App from './App.tsx';
import './index.css';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
