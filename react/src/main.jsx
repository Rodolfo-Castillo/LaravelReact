import React from 'react';
import { createRoot } from "react-dom/client";
import Routes from './router';
import {store} from './store';
import { Provider } from 'react-redux'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>
);
