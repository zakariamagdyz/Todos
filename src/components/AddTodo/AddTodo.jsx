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
import { withRouter } from "react-router-dom";

//

const AddTodo = ({
  addTodo,
  allTodos,
  setErrorMsg,
  setInput,
  inputValue,
  errorValue,
  history,
  editMode,
  editInputValue,
  editHandelChange,
  editTodo,
  todoId,
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
    const value = editMode ? editInputValue : inputValue;
    //SHOW ERROR
    if (value.length > 50 || value.length < 4) {
      setErrorMsg(value.length < 4 ? errorMsgs.less4 : errorMsgs.above50);
      hideError();
      return;
    }
    let isError = false;
    allTodos.forEach((curr) => {
      if (curr.todoName.toLowerCase() === value.toLowerCase()) isError = true;
    });

    //SHOW ERROR
    if (isError) {
      setErrorMsg(errorMsgs.sameName);
      hideError();
      return;
    }
    //ADD TODO
    if (editMode) {
      editTodo({ id: todoId, name: value.trim().toLowerCase() });
      history.push("/");
    } else {
      addTodo({ todo: value.trim().toLowerCase() });
    }
    //DEFAULT STATE
    defaultState();
  };

  return (
    <div className="add-todo">
      <AddTodoStyled>
        <AddTodoForm onSubmit={handelSubmit}>
          <AddTodoInput
            placeholder={!editMode ? "Create a new todo .." : ""}
            name="todo"
            required={!editMode && true}
            value={!editMode ? inputValue : editInputValue}
            onChange={!editMode ? hanedelChange : editHandelChange}
            autoComplete="off"
            ref={inputRef}
          />
          <AddTodoButton edit={editMode ? true : false}>
            {!editMode ? "Add todo" : "Save edit"}
          </AddTodoButton>
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
export default withRouter(
  connect(mapStateToprops, mapDispatchToprops)(AddTodo)
);
