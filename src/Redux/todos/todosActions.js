import { todosTypes } from "./todosTypes";
import { v4 } from "uuid";

export const addNewTodo = ({ todo, timeFrame, parentId }) => ({
  type: todosTypes.ADD_NEW_TODO,
  payload: {
    id: v4(),
    todoName: todo,
    createAt: new Date().getTime(),
    completed: false,
    timeFrame,
    parentId,
  },
});

export const removeAllTodos = (arr) => ({
  type: todosTypes.REMOVE_ALL_TODOS,
  payload: arr,
});

export const removeTodo = (id) => ({
  type: todosTypes.REMOVE_TODO,
  payload: id,
});

export const changeTodoState = (id) => ({
  type: todosTypes.CHANGE_TODO_STATE,
  payload: id,
});

export const changeTodoToComplete = (id) => ({
  type: todosTypes.CHANGE_TO_COMPLETE,
  payload: id,
});

export const changeTodoToUncomplete = (id) => ({
  type: todosTypes.CHANGE_TO_UNCOMPLETE,
  payload: id,
});

export const changeTodosType = (typeNum) => ({
  type: todosTypes.CHANGE_TODOS_TYPE,
  payload: typeNum,
});

export const changeTodoName = ({ id, name }) => ({
  type: todosTypes.EDIT_TODO,
  payload: { id, name },
});

export const fetchTodos = (todos) => ({
  type: todosTypes.FETCH_TODOS,
  payload: todos,
});
