/* eslint-disable no-shadow */
/**
 * Action Types
 */
export enum AlbumsTypes {
  LOAD_REQUEST = '@albums/LOAD_REQUEST',
  LOAD_SUCCESS = '@albums/LOAD_SUCCESS',
  LOAD_FAILURE = '@albums/LOAD_FAILURE',
}

/**
 * Data Types
 */

export interface Album {
  userId: number;
  id: number;
  title: string;
}

/**
 * State Type
 */
export interface AlbumsState {
  readonly data: Album[],
  readonly loading: boolean,
  readonly error: boolean
};
