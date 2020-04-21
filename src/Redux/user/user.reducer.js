import { userTypes } from "./user.type";

const INITAL_STATE = {
  userData: null,
  error: null,
};

export const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case userTypes.LOG_IN:
      return { ...state, userData: action.payload, error: null };

    case userTypes.LOG_OUT:
      return { ...state, userData: null };

    case userTypes.SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
