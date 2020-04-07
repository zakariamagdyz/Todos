import { todosTypes } from "./todosTypes";

const INITAL_TODOS_DATA = {
  completedTodos: [],
  incompletedTodos: [],
};

export const todosReducer = (state = INITAL_TODOS_DATA, action) => {
  switch (action.type) {
    case todosTypes.ADD_NEW_TODO:
      return {
        ...state,
        completedTodos: [...state.completedTodos, action.payload],
      };
    case todosTypes.REMOVE_ALL_TODOS:
      return { ...state, completedTodos: [], incompletedTodos: [] };
    default:
      return state;
  }
};
