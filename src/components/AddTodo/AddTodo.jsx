import React, { useRef, useEffect } from "react";
import {
  AddTodoButton,
  AddTodoForm,
  AddTodoInput,
  AddTodoStyled,
} from "./addTodoStyle";

import Error from "../Error/Error";
import { connect } from "react-redux";
import { addNewTodo } from "../../Redux/todos/todosActions";
import { setError, setTodoInput } from "../../Redux/addForm/addFormActions";
import { selectTargetTodos } from "../../Redux/todos/todosSelector";
import {
  selectInputValue,
  selectErrorValue,
} from "../../Redux/addForm/addFormSelectore";

import { createStructuredSelector } from "reselect";

//

const AddTodo = ({
  addTodo,
  allTodos,
  setErrorMsg,
  setInput,
  inputValue,
  errorValue,
}) => {
  // ErrorMsgs
  const errorMsgs = {
    above50: "Your todo charecters is more than 50 characters",
    less4: "Your todo charecters is less than 4 characters",
    sameName: "You have a todo with the same name",
  };

  //Create Ref
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Add Todo
  const defaultState = () => {
    setErrorMsg(null);
    setInput("");
  };

  const hanedelChange = (e) => {
    setInput(e.target.value);
  };

  const hideError = () => {
    setTimeout(() => {
      setErrorMsg(null);
    }, 3000);
  };
  // HANDEL SUBMIT
  const handelSubmit = (e) => {
    e.preventDefault();
    //SHOW ERROR
    if (inputValue.length > 50 || inputValue.length < 4) {
      setErrorMsg(inputValue.length < 4 ? errorMsgs.less4 : errorMsgs.above50);
      hideError();
      return;
    }
    let isError = false;
    allTodos.forEach((curr) => {
      if (curr.todoName.toLowerCase() === inputValue.toLowerCase())
        isError = true;
    });

    //SHOW ERROR
    if (isError) {
      setErrorMsg(errorMsgs.sameName);
      hideError();
      return;
    }
    //ADD TODO
    addTodo({ todo: inputValue.trim().toLowerCase() });
    //DEFAULT STATE
    defaultState();
  };

  return (
    <div className="add-todo">
      <AddTodoStyled>
        <AddTodoForm onSubmit={handelSubmit}>
          <AddTodoInput
            placeholder="Create a new todo .."
            name="todo"
            required
            value={inputValue}
            onChange={hanedelChange}
            autoComplete="off"
            ref={inputRef}
          />
          <AddTodoButton>Add todo</AddTodoButton>
        </AddTodoForm>

        {errorValue && <Error msg={errorValue} />}
      </AddTodoStyled>
    </div>
  );
};

const mapDispatchToprops = (dispatch) => ({
  addTodo: (todoName) => dispatch(addNewTodo(todoName)),
  setInput: (value) => dispatch(setTodoInput(value)),
  setErrorMsg: (msg) => dispatch(setError(msg)),
});

const mapStateToprops = createStructuredSelector({
  allTodos: selectTargetTodos,
  inputValue: selectInputValue,
  errorValue: selectErrorValue,
});
export default connect(mapStateToprops, mapDispatchToprops)(AddTodo);
