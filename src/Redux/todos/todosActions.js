import { todosTypes } from "./todosTypes";
import { v4 } from "uuid";

export const addNewTodo = ({ todo, timeFrame }) => ({
  type: todosTypes.ADD_NEW_TODO,
  payload: {
    id: v4(),
    createAt: new Date().getTime(),
    todoName: todo,
    completed: false,
    timeFrame,
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

export const changeTodosType = (typeNum) => ({
  type: todosTypes.CHANGE_TODOS_TYPE,
  payload: typeNum,
});

export const changeTodoName = ({ id, name }) => ({
  type: todosTypes.EDIT_TODO,
  payload: { id, name },
});
