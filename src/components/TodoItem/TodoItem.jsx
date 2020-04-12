import React from "react";
import { TodoItemButton, TodoItemStyled, TodoItemTexts } from "./todoItemStyle";
import moment from "moment";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";

import { useDispatch } from "react-redux";
import { removeTodo, changeTodoState } from "../../Redux/todos/todosActions";
import { withRouter } from "react-router-dom";

//

const TodoItem = (props) => {
  const {
    id,
    todoName,
    createAt,
    completed,
    history,
    editMode,
    editValue,
  } = props;

  const dispatch = useDispatch();

  return (
    <TodoItemStyled active={completed && true} edit={editMode ? true : false}>
      <TodoItemTexts>
        <p>{editMode ? editValue : todoName}</p>
        <p>{moment(createAt).fromNow()}</p>
      </TodoItemTexts>

      <TodoItemButton
        done
        active={completed && true}
        onClick={() => {
          dispatch(changeTodoState(id));
          editMode && history.push("/");
        }}
      >
        <MdDone />
      </TodoItemButton>

      {!editMode && !completed ? (
        <TodoItemButton edit onClick={() => history.push(`/edit/${id}`)}>
          <MdEdit />
        </TodoItemButton>
      ) : null}

      <TodoItemButton
        delete
        active={completed && true}
        onClick={() => {
          dispatch(removeTodo(id));
          editMode && history.push("/");
        }}
      >
        <MdDelete />
      </TodoItemButton>
    </TodoItemStyled>
  );
};

export default withRouter(TodoItem);
