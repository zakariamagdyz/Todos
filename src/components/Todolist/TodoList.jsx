import React from "react";

import { TodolistText, TodoListStyled } from "./todoListStyle";
import TodoItem from "../TodoItem/TodoItem";
import TodoListData from "../TodoListData/TodolistData";
import { connect } from "react-redux";
import { selectTargetTodos } from "../../Redux/todos/todosSelector";
import { createStructuredSelector } from "reselect";
import { removeAllTodos } from "../../Redux/todos/todosActions";
import TodoListHeader from "../TodolistHeader/TodoListHeader";

//
const TodoList = ({ targetTodos, removeAll }) => {
  return (
    <div className="todo-List">
      <TodoListStyled>
        <TodoListHeader
          title="Today's todo"
          btnTitle="remove all"
          btnFunc={() => {
            removeAll(targetTodos);
          }}
          todos={targetTodos}
        />

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

export { TodoList };
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
