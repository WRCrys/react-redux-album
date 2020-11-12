/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Photo } from '../../store/ducks/photos/types';

interface StateProps {
  photo: Photo
}

class AlbumInfo extends Component<StateProps> {
  render() {
    console.log(this.props.photo);
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default AlbumInfo;
