import React from "react";
import { TodoItemButton, TodoItemStyled, TodoItemTexts } from "./todoItemStyle";
import moment from "moment";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";

import { connect } from "react-redux";
import { removeTodo, changeTodoState } from "../../Redux/todos/todosActions";

//

const TodoItem = (props) => {
  const { id, todoName, createAt, remove, completed, changeState } = props;
  return (
    <TodoItemStyled active={completed && true}>
      <TodoItemTexts className="hola">
        <p>{todoName}</p>
        <p>{moment(createAt).fromNow()}</p>
      </TodoItemTexts>

      <TodoItemButton
        done
        active={completed && true}
        onClick={() => {
          changeState(id);
        }}
      >
        <MdDone />
      </TodoItemButton>

      {!completed && (
        <TodoItemButton edit>
          <MdEdit />
        </TodoItemButton>
      )}
      <TodoItemButton
        delete
        active={completed && true}
        onClick={() => remove(id)}
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

export default connect(null, mapDispatchToProps)(TodoItem);
