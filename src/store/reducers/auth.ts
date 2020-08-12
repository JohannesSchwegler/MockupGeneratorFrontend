import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

export const initialState = {
  token: null,
  error: null,
  loading: false,
};

const authStart = (state: object, action: any) => {
    console.log(action)
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state: object, action: any) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
  });
};

const authFail = (state: object, action: any) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state: object, action: any) => {
    console.log(action)
  return updateObject(state, {
    token: null,
  });
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
