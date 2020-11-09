/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import ListAlbums from '../../components/ListAlbums';
import './styles/index.css';

class Home extends Component {
  render() {
    return (
      <div className="root">
        <ListAlbums />
      </div>
    );
  }
}

export default Home;
