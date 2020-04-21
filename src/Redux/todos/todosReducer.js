import { todosTypes } from "./todosTypes";
import { userTypes } from "../user/user.type";
import {
  changeTodoState,
  changeTodoName,
  changeToComplete,
  changeToUncomplete,
} from "./todosUtils";
import { removeAllSection } from "./todosUtils";

const INITAL_TODOS_DATA = {
  allTodos: [],
  todosValue: "3",
};

export const todosReducer = (state = INITAL_TODOS_DATA, action) => {
  switch (action.type) {
    case todosTypes.ADD_NEW_TODO:
      return { ...state, allTodos: [...state.allTodos, action.payload] };

    case todosTypes.REMOVE_ALL_TODOS:
      return {
        ...state,
        allTodos: removeAllSection(state.allTodos, action.payload),
      };

    case todosTypes.REMOVE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.filter(
          (todo) =>
            todo.id !== action.payload && todo.parentId !== action.payload
        ),
      };

    case todosTypes.CHANGE_TODO_STATE:
      return {
        ...state,
        allTodos: changeTodoState(state.allTodos, action.payload),
      };

    case todosTypes.CHANGE_TODOS_TYPE:
      return { ...state, todosValue: action.payload };

    case todosTypes.EDIT_TODO:
      return {
        ...state,
        allTodos: changeTodoName(state.allTodos, action.payload),
      };

    case todosTypes.CHANGE_TO_COMPLETE:
      return {
        ...state,
        allTodos: changeToComplete(state.allTodos, action.payload),
      };

    case todosTypes.CHANGE_TO_UNCOMPLETE:
      return {
        ...state,
        allTodos: changeToUncomplete(state.allTodos, action.payload),
      };

    case userTypes.LOG_OUT:
      return { ...state, allTodos: [] };

    case todosTypes.FETCH_TODOS:
      return { ...state, allTodos: action.payload };

    default:
      return state;
  }
};
