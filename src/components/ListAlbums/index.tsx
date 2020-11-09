/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { ApplicationState } from '../../store';
import { Album } from '../../store/ducks/albums/types';
import * as AlbumActions from '../../store/ducks/albums/action';
import AlbumComponent from '../Album';
import luffy from '../../assets/luffy-new-world.jpg';
import './styles/index.css';

interface StateProps {
  albums: Album[];
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class ListAlbums extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { albums } = this.props;
    console.log(albums);
    return (
      <div className="root">
        <Grid container spacing={3}>
          {albums.map((a) => (
            <Grid item xs>
              <AlbumComponent id={a.id} name={a.title} image={luffy} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  albums: state.albums.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AlbumActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbums);
