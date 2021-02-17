import * as types from '../constants';

export const getDataReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_DATA_REQUEST:
      return {loading: true};
    case types.GET_DATA_SUCCESS:
      return {loading: false, data: action.payload};
    case types.GET_DATA_ERROR:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
