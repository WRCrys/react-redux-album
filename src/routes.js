/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AlbumInfo from './components/AlbumInfo';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/AlbumInfo/:id" component={AlbumInfo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
