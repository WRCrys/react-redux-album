/* eslint-disable no-shadow */
/**
 * Action Types
 */
export enum PhotosTypes {
  LOAD_REQUEST = '@photos/LOAD_REQUEST',
  LOAD_SUCCESS = '@photos/LOAD_SUCCESS',
  LOAD_FAILURE = '@photos/LOAD_FAILURE',
};

/**
 * Data Types
 */

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
 };

/**
 * State Type
 */
export interface PhotosState {
   readonly data: Photo[],
   readonly loading: boolean,
   readonly error: boolean
};
