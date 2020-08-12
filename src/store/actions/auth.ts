import * as actionTypes from './actionsTypes';
import axios from 'axios';
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token: string) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error: string) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime: number) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username: string, password: string) => {
  return (dispatch: any) => {
    dispatch(authStart());
    axios
      .post('http://127.0.0.1:8000/rest-auth/login/', {
        username: username,
        password: password,
      })
      .then((res: any) => {
        const token = res.data.key;
        const expirationDate: any = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err: string) => {
        dispatch(authFail(err));
      });
  };
};

export const authSignup = (
  username: string,
  email: string,
  password1: string,
  password2: string,
) => {
  return (dispatch: any) => {
    dispatch(authStart());
    axios
      .post('http://127.0.0.1:8000/rest-auth/registration/', {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
      })
      .then((res: any) => {
        const token = res.data.key;
        const expirationDate: any = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err: string) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch: any) => {
    const token: string = JSON.parse(localStorage.getItem('token') || '{}');
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate: any = new Date(JSON.parse(localStorage.getItem('currentUser') || 'expirationDate'))
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};
