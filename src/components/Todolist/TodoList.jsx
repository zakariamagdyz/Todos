import React from "react";

import {
  TodolistText,
  TodoListInfo,
  TodoListRemove,
  TodoListStyled,
  TodoListTitle,
} from "./todoListStyle";
import TodoItem from "../TodoItem/TodoItem";
import TodoListData from "../TodoListData/TodolistData";
import { connect } from "react-redux";
import { selectTargetTodos } from "../../Redux/todos/todosSelector";
import { createStructuredSelector } from "reselect";
import { removeAllTodos } from "../../Redux/todos/todosActions";

//
const TodoList = ({ targetTodos, removeAll }) => {
  return (
    <div className="todo-List">
      <TodoListStyled>
        <TodoListInfo>
          <TodoListTitle>Today's todos</TodoListTitle>
          {targetTodos.length ? (
            <TodoListRemove onClick={() => removeAll(targetTodos)}>
              Remove all
            </TodoListRemove>
          ) : null}
        </TodoListInfo>

        {targetTodos.length ? (
          <div className="todo-list__todos">
            {targetTodos.map((curr) => (
              <TodoItem key={curr.id} {...curr} />
            ))}{" "}
          </div>
        ) : (
          <TodolistText>There is nothing to show </TodolistText>
        )}

        <TodoListData />
      </TodoListStyled>
    </div>
  );
};

//

const mapStateToProps = createStructuredSelector({
  targetTodos: selectTargetTodos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeAll: (arr) => dispatch(removeAllTodos(arr)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
