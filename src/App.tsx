/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Routes />
  </Provider>
);

export default App;
