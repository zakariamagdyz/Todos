import React, { useRef, useEffect, useMemo } from "react";
import {
  AddTodoButton,
  AddTodoForm,
  AddTodoInput,
  AddTodoStyled,
} from "./addTodoStyle";

import { useDispatch, useSelector } from "react-redux";
import Error from "../Error/Error";
import { addNewTodo } from "../../Redux/todos/todosActions";
import { setError, setTodoInput } from "../../Redux/addForm/addFormActions";
import { selectTargetTodos } from "../../Redux/todos/todosSelector";
import {
  selectInputValue,
  selectErrorValue,
} from "../../Redux/addForm/addFormSelectore";

import { useHistory } from "react-router-dom";

////////////////////////////////////////////////////////////////

const AddTodo = ({ editMode, timeFrame, parentId }) => {
  // ErrorMsgs
  const errorMsgs = {
    above50: "Your todo charecters is more than 50 characters",
    less4: "Your todo charecters is less than 4 characters",
    sameName: "You have a todo with the same name",
  };
  const todoSearchData = { timeFrame, parentId };

  const targetTodos = useSelector((state) =>
    selectTargetTodos(state, todoSearchData)
  );
  const addinputValue = useSelector(selectInputValue);
  const errorValue = useSelector(selectErrorValue);
  const dispatch = useDispatch();
  const history = useHistory();
  const memoButton = useMemo(
    () => (
      <AddTodoButton edit={editMode ? true : false}>
        {!editMode ? `Add ${timeFrame} todo` : "Save edit"}
      </AddTodoButton>
    ),
    [editMode, timeFrame]
  );

  //Create Ref
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Add Todo
  const defaultState = () => {
    dispatch(setError(null));
    dispatch(setTodoInput(""));
  };

  const hanedelChange = (e) => {
    dispatch(setTodoInput(e.target.value));
  };

  const hideError = () => {
    setTimeout(() => {
      dispatch(setError(null));
    }, 3000);
  };
  // HANDEL SUBMIT
  const handelSubmit = (e) => {
    e.preventDefault();
    const value = editMode ? editMode.inputValue : addinputValue;
    //SHOW ERROR
    if (value.length > 50 || value.length < 4) {
      dispatch(
        setError(value.length < 4 ? errorMsgs.less4 : errorMsgs.above50)
      );
      hideError();
      return;
    }
    let isError = false;
    targetTodos.forEach((curr) => {
      if (curr.todoName.toLowerCase() === value.toLowerCase()) isError = true;
    });

    //SHOW ERROR
    if (isError) {
      dispatch(setError(errorMsgs.sameName));
      hideError();
      return;
    }
    //ADD TODO
    if (editMode) {
      editMode.changeTargetName({
        id: editMode.targetTodo.id,
        name: value.trim().toLowerCase(),
      });
      history.push(`/${timeFrame}-todos`);
    } else {
      dispatch(
        addNewTodo({ todo: value.trim().toLowerCase(), timeFrame, parentId })
      );
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
            value={!editMode ? addinputValue : editMode.inputValue}
            onChange={
              !editMode
                ? hanedelChange
                : editMode.handelInputchange.bind(editMode)
            }
            autoComplete="off"
            ref={inputRef}
          />
          {memoButton}
        </AddTodoForm>

        {errorValue && <Error msg={errorValue} />}
      </AddTodoStyled>
    </div>
  );
};

export default React.memo(AddTodo);
