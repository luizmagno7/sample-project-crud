import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import './styles/globals.scss';
import App from './pages/Routes';
import Loading from './components/Loading/index';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Loading loadingText="Carregando..." />}>
          <App />
        </Suspense>
      </BrowserRouter>
  </React.StrictMode>
);