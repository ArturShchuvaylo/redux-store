import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import PhonesStoreService from "./service/phones-store-service/phones-store-service";
import { PhonesStoreServiceProvider } from "./components/phones-store-service-context/phones-store-service.context";


import store from "./store";

const phonesStoreService = new PhonesStoreService();

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <PhonesStoreServiceProvider value={phonesStoreService}>
        <Router>
          <App />
        </Router>
      </PhonesStoreServiceProvider>
    </ErrorBoundry>
  </Provider>
)
