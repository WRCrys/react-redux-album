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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import './styles/album.css';

interface StateProps {
  id: number,
  name: string,
  image: string,
}

class Album extends Component<StateProps> {
  render() {
    return (
      <Card className="root">
        <CardActionArea>
          <CardMedia className="media" image={this.props.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" href="/AlbumInfo">
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

export default connect(mapStateToProps)(Album);
