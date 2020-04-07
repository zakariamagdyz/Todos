import React from "react";
import "./Todolist.scss";
import TodoItem from "../TodoItem/TodoItem";
import { connect } from "react-redux";
import {
  selectAllTodos,
  selectCompleted,
  selectUncompleted,
  selectAll,
  selectTodosType,
} from "../../Redux/todos/todosSelector";
import { createStructuredSelector } from "reselect";
import {
  removeAllTodos,
  changeTodosType,
} from "../../Redux/todos/todosActions";

const TodoList = ({
  targetTodos,
  removeAll,
  comTodos,
  uncomTodos,
  all,
  type,
  changeTypes,
}) => {
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
        targetTodos.map((curr) => <TodoItem key={curr.id} {...curr} />)
      ) : (
        <p className="todo-list__text">There is nothing to show </p>
      )}

      {all.length ? (
        <div className="todo-list__data">
          <button
            className="todo-list__data-1 "
            onClick={() => changeTypes("3")}
          >{`all (${all.length})`}</button>
          <button
            className="todo-list__data-2"
            onClick={() => changeTypes("1")}
          >{`completed (${comTodos})`}</button>
          <button
            className="todo-list__data-3"
            onClick={() => changeTypes("2")}
          >{`uncompleted (${uncomTodos})`}</button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  targetTodos: selectAllTodos,
  comTodos: selectCompleted,
  uncomTodos: selectUncompleted,
  all: selectAll,
  type: selectTodosType,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeAll: () => dispatch(removeAllTodos()),
    changeTypes: (type) => dispatch(changeTodosType(type)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
