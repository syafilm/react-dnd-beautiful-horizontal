import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {configure} from 'mobx';
import { history } from 'utils';
import {Provider} from 'context';
import { RootStore } from 'stores';
import App from './App';
import { CookiesProvider } from 'react-cookie';

import 'rsuite/dist/styles/rsuite-default.css';
import 'react-intl-tel-input/dist/main.css';
import 'flatpickr/dist/themes/material_green.css';
import 'react-input-range/lib/css/index.css';
import './app.scss';

configure({ enforceActions: 'observed'})

const value = new RootStore()
// temporary use event turbolinks until turbolinks unused
// document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(
  <Provider value={value}>
    <CookiesProvider>
      <Router history={history}>
        <App />
      </Router>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
)
