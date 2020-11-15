/* eslint-disable import/extensions */
import { Reducer } from 'redux';
import { PhotosState, PhotosTypes } from './types';

const INITIAL_STATE: PhotosState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<PhotosState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PhotosTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case PhotosTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case PhotosTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };

    default:
      return state;
  }
};

export default reducer;
