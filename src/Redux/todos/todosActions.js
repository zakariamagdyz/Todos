import { todosTypes } from "./todosTypes";
import { v4 } from "uuid";

export const addNewTodo = ({ todo }) => ({
  type: todosTypes.ADD_NEW_TODO,
  payload: {
    id: v4(),
    createAt: new Date().getTime(),
    todoName: todo,
  },
});

export const removeAllTodos = () => ({
  type: todosTypes.REMOVE_ALL_TODOS,
});
