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
import { useParams, useHistory } from "react-router-dom";

const EditPage = (props) => {
  /////////// logic
  //Data
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  //Actions=

  const editModeConfig = {
    targetTodo: useSelector((state) => selectEditedTodo(state, params.todoId)),
    inputValue: useSelector(selectEditValue),
    handelInputchange(e) {
      this.setTargetName(e.target.value);
    },
    changeTargetName: (data) => dispatch(changeTodoName(data)),
    setTargetName: (value) => dispatch(setTodoEdit(value)),
    setError: (msg) => dispatch(setError(msg)),
  };

  // life cycle
  useEffect(() => {
    this.setTargetName(
      editModeConfig.targetTodo && editModeConfig.targetTodo.todoName
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /////////view

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
              editModeConfig.setError(null);
            }}
          />

          {editModeConfig.targetTodo && (
            <TodoItem
              editMode={editModeConfig}
              {...editModeConfig.targetTodo}
            />
          )}
        </TodoListStyled>

        <AddTodo editMode={editModeConfig} />
      </EditPageContainer>
    </div>
  );
};

export default EditPage;
