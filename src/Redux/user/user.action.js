import { userTypes } from "./user.type";

export const logIn = (data) => ({
  type: userTypes.LOG_IN,
  payload: data,
});

export const setError = (msg) => ({
  type: userTypes.SET_ERROR,
  payload: msg,
});

export const logOut = () => ({
  type: userTypes.LOG_OUT,
});
