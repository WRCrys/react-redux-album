/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/extensions */
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadSuccess, loadFailure } from './action';

export function* loadPhotos() {
  debugger;
  try {
    const response = yield call(api.get, 'photos');
    yield put(loadSuccess(response.data));
  } catch (error) {
    const erro = error;
    console.log(erro);
    yield put(loadFailure());
  }
}
