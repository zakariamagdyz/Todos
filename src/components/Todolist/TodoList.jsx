import React from "react";
import "./Todolist.scss";
import TodoItem from "../TodoItem/TodoItem";
import { connect } from "react-redux";
import { selectAllTodos } from "../../Redux/todos/todosSelector";
import { removeAllTodos } from "../../Redux/todos/todosActions";

const TodoList = ({ todos, removeAll }) => {
  return (
    <div className="todo-list">
      <div className="todo-list__info">
        <h3 className="todo-list__title">Your todos</h3>
        {todos.length ? (
          <button className="todo-list__remove-all" onClick={removeAll}>
            Remove all
          </button>
        ) : null}
      </div>
      {todos.length ? (
        todos.map(({ id, ...curr }) => <TodoItem key={id} {...curr} />)
      ) : (
        <p className="todo-list__text">There is nothing to show </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: selectAllTodos(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeAll: () => dispatch(removeAllTodos()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
