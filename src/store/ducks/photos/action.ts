/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/extensions */
import { action } from 'typesafe-actions';
import { PhotosTypes, Photo } from './types';

export const loadRequest = () => action(PhotosTypes.LOAD_REQUEST);

export const loadSuccess = (data: Photo[]) => action(PhotosTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(PhotosTypes.LOAD_FAILURE);
