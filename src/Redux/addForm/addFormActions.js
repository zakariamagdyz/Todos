import { addFormTypes } from "./addFormTypes";

export const setTodoInput = (value) => ({
  type: addFormTypes.SET_TODO_INPUT,
  payload: value,
});

export const setError = (msg) => ({
  type: addFormTypes.SET_ERROR,
  payload: msg,
});
