import React from "react";
import {
  TodoListInfo,
  TodoListTitle,
  TodoListRemove,
} from "./TodoListHeaderStyle";

import { useHistory } from "react-router-dom";

const TodoListHeader = ({
  goHome,
  btnTitle,
  title,
  btnFunc,
  todos = [],
  time,
  editMode,
}) => {
  const history = useHistory();
  return (
    <div className="todo-list-header">
      <TodoListInfo>
        <TodoListTitle>{title}</TodoListTitle>
        {goHome ? (
          <TodoListRemove onClick={btnFunc}>{btnTitle}</TodoListRemove>
        ) : null}

        {time && !editMode ? (
          <TodoListRemove onClick={() => history.push(`/${time}-todos`)}>
            go up{" "}
          </TodoListRemove>
        ) : null}
      </TodoListInfo>
    </div>
  );
};

export default TodoListHeader;
