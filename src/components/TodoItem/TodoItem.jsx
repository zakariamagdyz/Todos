import React from "react";
import { TodoItemButton, TodoItemStyled, TodoItemTexts } from "./todoItemStyle";
import moment from "moment";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";

import { connect } from "react-redux";
import { removeTodo, changeTodoState } from "../../Redux/todos/todosActions";
import { withRouter } from "react-router-dom";

//

const TodoItem = (props) => {
  const {
    id,
    todoName,
    createAt,
    completed,
    remove,
    changeState,
    history,
    editMode,
    editValue,
  } = props;
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
          changeState(id);
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
          remove(id);
          editMode && history.push("/");
        }}
      >
        <MdDelete />
      </TodoItemButton>
    </TodoItemStyled>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeTodo(id)),
  changeState: (id) => dispatch(changeTodoState(id)),
});

export default withRouter(connect(null, mapDispatchToProps)(TodoItem));
