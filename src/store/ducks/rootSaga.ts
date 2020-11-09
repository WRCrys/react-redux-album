/* eslint-disable import/extensions */
import { all, takeLatest } from 'redux-saga/effects';
import { AlbumsTypes } from './albums/types';
import { load } from './albums/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.LOAD_REQUEST, load),
  ]);
}
