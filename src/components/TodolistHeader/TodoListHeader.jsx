import React from "react";
import {
  TodoListInfo,
  TodoListTitle,
  TodoListRemove,
  ArrowBack,
  ArrowForward,
  ArrowsContainer,
} from "./TodoListHeaderStyle";

import { useHistory } from "react-router-dom";

/////////////

const TodoListHeader = ({
  goHome,
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
        <ArrowsContainer>
          {goHome ? (
            <TodoListRemove onClick={btnFunc}>
              <ArrowBack />
              go back
            </TodoListRemove>
          ) : null}

          {!editMode ? (
            <TodoListRemove
              onClick={() => history.push(`/${time.timeUp}-targets`)}
              disabled={!time.timeUp}
            >
              <ArrowBack />
              Up
            </TodoListRemove>
          ) : null}

          {!editMode ? (
            <TodoListRemove
              onClick={() => history.push(`/${time.timeDown}-targets`)}
              disabled={!time.timeDown}
            >
              Down
              <ArrowForward />
            </TodoListRemove>
          ) : null}
        </ArrowsContainer>
      </TodoListInfo>
    </div>
  );
};

export default TodoListHeader;
