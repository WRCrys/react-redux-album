/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/extensions */
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './action';

export function* loadAlbums() {
  try {
    const respose = yield call(api.get, 'albums');
    yield put(loadSuccess(respose.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
