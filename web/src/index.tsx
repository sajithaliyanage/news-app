import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
