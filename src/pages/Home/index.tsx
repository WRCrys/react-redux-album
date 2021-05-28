/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import ListAlbums from '../../components/ListAlbums';
import { setEnvironment } from '../../environments';
import './styles/index.css';

class Home extends Component {
  render() {
    const enviroment = setEnvironment();
    console.log('Url', enviroment.Api.Url);
    console.log('Routes', enviroment.Api.Routes);
    return (
      <div className="root">
        <h3>{enviroment.Api.Url}</h3>
        <ListAlbums />
      </div>
    );
  }
}

export default Home;
