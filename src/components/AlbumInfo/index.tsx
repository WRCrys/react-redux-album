/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable radix */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Grid } from '@material-ui/core';
import { ApplicationState } from '../../store';
import { Photo } from '../../store/ducks/photos/types';
import * as PhotoActions from '../../store/ducks/photos/action';
import ItemPhoto from '../ItemPhoto';
import Sun from '../../assets/sun.jpg';
import './styles/albumInfo.css';

interface StateProps {
  photos: Photo[];
  match: any
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class AlbumInfo extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    const { photos } = this.props;

    const { id } = this.props.match.params;

    // eslint-disable-next-line eqeqeq
    const result = photos.filter((p) => p.albumId === parseInt(id));

    console.log(`Id do album: ${id}`);

    console.log(`Resultado: ${result}`);

    return (
      <div className="root">
        <img className="media-album" src={Sun} />
        <Grid container spacing={5}>
          {result.map((r) => (
            <Grid item md={2} key={r.id}>
              <ItemPhoto photo={r} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  photos: state.photos.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(PhotoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumInfo);
