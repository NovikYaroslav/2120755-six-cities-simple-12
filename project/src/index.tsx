import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {offersList } from 'mocks/offers';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App availibleOffers={offersList} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
