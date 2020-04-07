import React, { useState } from "react";
import "./AddTodo.scss";

import Button from "../Button/Button";
import Error from "../Error/Error";
import { connect } from "react-redux";
import { addNewTodo } from "../../Redux/todos/todosActions";
import { selectAllTodos } from "../../Redux/todos/todosSelector";

const AddTodo = ({ addTodo, allTodos }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);
  const errorMsgs = {
    above50: "Your todo charecters is more than 50 characters",
    less4: "Your todo charecters is less than 4 characters",
    sameName: "You have a todo with the same name",
  };

  const defaultState = () => {
    setError(null);
    setTodo("");
  };

  const hanedelChange = (e) => {
    setTodo(e.target.value);
  };

  const hideError = () => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  // HANDEL SUBMIT

  const handelSubmit = (e) => {
    // PREVENT DEFAULT
    e.preventDefault();

    //SHOW ERROR
    if (todo.length > 50 || todo.length < 4) {
      setError(todo.length < 4 ? errorMsgs.less4 : errorMsgs.above50);
      hideError();
      return;
    }

    let isError = false;
    allTodos.forEach((curr) => {
      if (curr.todoName.toLowerCase() === todo.toLowerCase()) isError = true;
    });

    //SHOW ERROR

    if (isError) {
      setError(errorMsgs.sameName);
      hideError();
      return;
    }

    //ADD TODO
    addTodo({ todo: todo.trim().toLowerCase() });

    //DEFAULT STATE
    defaultState();
  };

  return (
    <div className="add-todo">
      <form className="add-todo__form" onSubmit={handelSubmit}>
        <input
          placeholder="New todo .."
          name="todo"
          required
          value={todo}
          onChange={hanedelChange}
          autoComplete="off"
        />
        <Button />
      </form>

      {error && <Error msg={error} />}
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  addTodo: (todoName) => dispatch(addNewTodo(todoName)),
});

const mapStateToprops = (state) => ({
  allTodos: selectAllTodos(state),
});
export default connect(mapStateToprops, mapDispatchToprops)(AddTodo);
