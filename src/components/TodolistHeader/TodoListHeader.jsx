import React from "react";
import {
  TodoListInfo,
  TodoListTitle,
  TodoListRemove,
} from "./TodoListHeaderStyle";

const TodoListHeader = ({ goHome, btnTitle, title, btnFunc, todos = [] }) => {
  return (
    <div className="todo-list-header">
      <TodoListInfo>
        <TodoListTitle>{title}</TodoListTitle>
        {todos.length || goHome ? (
          <TodoListRemove onClick={btnFunc}>{btnTitle}</TodoListRemove>
        ) : null}
      </TodoListInfo>
    </div>
  );
};

export default TodoListHeader;
