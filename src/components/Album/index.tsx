/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import {
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import { bindActionCreators, Dispatch } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import './styles/album.css';
import { Album } from '../../store/ducks/albums/types';
import * as PhotoActions from '../../store/ducks/photos/action';

interface StateProps {
  album: Album,
  image: string,
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps;

class ItemAlbum extends Component<Props> {
  render() {
    return (
      <Card className="root">
        <CardActionArea>
          <CardMedia className="media" image={this.props.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.album.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" onClick={() => onLoadPhotoClick()} href="/AlbumInfo">
            Open Album
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  albums: state.albums,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLoadPhotoClick: () => {
    dispatch(PhotoActions.loadRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemAlbum);
