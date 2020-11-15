/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import {
  Card, CardActionArea, CardMedia,
} from '@material-ui/core';
import React, { Component } from 'react';
import { Photo } from '../../store/ducks/photos/types';
import './styles/itemPhoto.css';

interface StateProps {
  photo: Photo,
}

type Props = StateProps;

class ItemPhoto extends Component<Props> {
  openPhoto(id: number) {
    console.log(`Abrindo a foto de id: ${id}`);
  }

  render() {
    const { photo } = this.props;
    return (
      <Card className="main">
        <CardActionArea>
          <CardMedia className="media-photo" image={photo.thumbnailUrl} onClick={(e) => this.openPhoto(photo.id)} />
        </CardActionArea>
      </Card>
    );
  }
}

export default ItemPhoto;
