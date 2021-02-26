import {getData, login, signup} from '../API';
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

export const createReview = review => {
  return {
    type: types.CREATE_REVIEW,
    payload: review,
  };
};

export const updateReview = review => {
  return {
    type: types.UPDATE_REVIEW,
    payload: review,
  };
};

export const deleteReview = name => {
  return {
    type: types.DELETE_REVIEW,
    payload: name,
  };
};

export const loginFromAPI = credentials => async dispatch => {
  try {
    dispatch({type: types.LOGIN_REQUEST});
    const data = await login(credentials);
    dispatch({type: types.LOGIN_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: types.LOGIN_ERROR,
      payload: error.message,
    });
  }
};

export const signupFromAPI = credentials => async dispatch => {
  try {
    dispatch({type: types.SIGNUP_REQUEST});
    const data = await signup(credentials);
    dispatch({type: types.SIGNUP_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: types.SIGNUP_ERROR,
      payload: error.message,
    });
  }
};
