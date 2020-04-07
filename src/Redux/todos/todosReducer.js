import { todosTypes } from "./todosTypes";

const INITAL_TODOS_DATA = {
  allTodos: [],
  todosValue: "3",
};

export const todosReducer = (state = INITAL_TODOS_DATA, action) => {
  switch (action.type) {
    case todosTypes.ADD_NEW_TODO:
      return {
        ...state,
        allTodos: [...state.allTodos, action.payload],
      };
    case todosTypes.REMOVE_ALL_TODOS:
      return { ...state, allTodos: [] };

    case todosTypes.REMOVE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.filter((todo) => todo.id !== action.payload),
      };

    case todosTypes.CHANGE_TODO_STATE:
      return {
        ...state,
        allTodos: state.allTodos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };

    case todosTypes.CHANGE_TODOS_TYPE:
      return { ...state, todosValue: action.payload };
    default:
      return state;
  }
};
