import React from "react";
import "./Todolist.scss";
import TodoItem from "../TodoItem/TodoItem";
import TodoListData from "../TodoListData/TodolistData";
import { connect } from "react-redux";
import {
  selectTargetTodos,
  selectTodosType,
} from "../../Redux/todos/todosSelector";
import { createStructuredSelector } from "reselect";
import { removeAllTodos } from "../../Redux/todos/todosActions";

//
const TodoList = ({ targetTodos, removeAll, type }) => {
  return (
    <div className="todo-list">
      <div className="todo-list__info">
        <h3 className="todo-list__title">Today's todos</h3>
        {targetTodos.length && type === "3" ? (
          <button className="todo-list__remove-all" onClick={removeAll}>
            Remove all
          </button>
        ) : null}
      </div>

      {targetTodos.length ? (
        <div className="todo-list__todos">
          {targetTodos.map((curr) => (
            <TodoItem key={curr.id} {...curr} />
          ))}{" "}
        </div>
      ) : (
        <p className="todo-list__text">There is nothing to show </p>
      )}

      <TodoListData />
    </div>
  );
};

//

const mapStateToProps = createStructuredSelector({
  targetTodos: selectTargetTodos,
  type: selectTodosType,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeAll: () => dispatch(removeAllTodos()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
