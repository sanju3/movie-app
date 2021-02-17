import {getData} from '../API';
import * as types from '../constants';

export const getDataFromAPI = () => async dispatch => {
  try {
    dispatch({type: types.GET_DATA_REQUEST});
    const data = await getData();
    dispatch({type: types.GET_DATA_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: types.GET_DATA_ERROR,
      payload: error.message,
    });
  }
};
