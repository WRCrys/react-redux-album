/* eslint-disable import/extensions */
import { Reducer } from 'redux';
import { AlbumsState, AlbumsTypes } from './types';

const INITIAL_STATE: AlbumsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<AlbumsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlbumsTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case AlbumsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case AlbumsTypes.LOAD_FAILURE:
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
