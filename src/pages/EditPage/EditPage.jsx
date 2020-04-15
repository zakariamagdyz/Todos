import React, { useEffect } from "react";
import TodoListHeader from "../../components/TodolistHeader/TodoListHeader";
import { TodoListStyled } from "../../components/Todolist/todoListStyle";
import TodoItem from "../../components/TodoItem/TodoItem";
import AddTodo from "../../components/AddTodo/AddTodo";
import { EditPageContainer } from "./EditPage.style";
import { useDispatch, useSelector } from "react-redux";
import { selectEditedTodo } from "../../Redux/todos/todosSelector";
import { changeTodoName } from "../../Redux/todos/todosActions";
import { setTodoEdit } from "../../Redux/addForm/addFormActions";
import { selectEditValue } from "../../Redux/addForm/addFormSelectore";
import { setError } from "../../Redux/addForm/addFormActions";
import { Redirect, useParams, useHistory } from "react-router-dom";

const EditPage = (props) => {
  //config
  const dispatch = useDispatch();
  const changeName = (data) => dispatch(changeTodoName(data));
  const setName = (value) => dispatch(setTodoEdit(value));
  const setErrorValue = (msg) => dispatch(setError(msg));
  const params = useParams();
  const history = useHistory();

  const todo = useSelector((state) => selectEditedTodo(state, params.todoId));
  const editValue = useSelector(selectEditValue);

  useEffect(() => {
    setName(todo && todo.todoName);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handelEditChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="edit-page">
      <EditPageContainer>
        <TodoListStyled edit>
          <TodoListHeader
            title="Edit todo"
            btnTitle="back home"
            goHome
            btnFunc={() => {
              history.push("/");
              setErrorValue(null);
            }}
          />
          {todo && <TodoItem editMode {...todo} editValue={editValue} />}
        </TodoListStyled>

        <AddTodo
          editMode
          editInputValue={editValue}
          editHandelChange={handelEditChange}
          editTodo={changeName}
          todoId={todo.id}
        />
      </EditPageContainer>
    </div>
  );
};

export default EditPage;
