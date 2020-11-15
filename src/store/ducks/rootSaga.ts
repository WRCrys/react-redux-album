/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/extensions */
import { all, takeLatest } from 'redux-saga/effects';
import { AlbumsTypes } from './albums/types';
import { loadAlbums } from './albums/sagas';
import { PhotosTypes } from './photos/types';
import { loadPhotos } from './photos/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.LOAD_REQUEST, loadAlbums),
    takeLatest(PhotosTypes.LOAD_REQUEST, loadPhotos),
  ]);
}
