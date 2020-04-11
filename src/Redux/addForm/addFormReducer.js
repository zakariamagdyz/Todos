import { addFormTypes } from "./addFormTypes";

const INITAL_ADD_FORM = {
  todoInput: "",
  editInput: "",
  error: null,
};

export const addFormReducer = (state = INITAL_ADD_FORM, action) => {
  switch (action.type) {
    case addFormTypes.SET_TODO_INPUT:
      return { ...state, todoInput: action.payload };

    case addFormTypes.SET_ERROR:
      return { ...state, error: action.payload };

    case addFormTypes.SET_TODO_EDIT:
      return { ...state, editInput: action.payload };
    default:
      return state;
  }
};
