/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { action } from 'typesafe-actions';
import { AlbumsTypes, Album } from './types';

export const loadRequest = () => action(AlbumsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Album[]) => action(AlbumsTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(AlbumsTypes.LOAD_FAILURE);
