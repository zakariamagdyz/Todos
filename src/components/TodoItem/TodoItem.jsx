import React from "react";
import "./TodoItem.scss";
import moment from "moment";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";

import { connect } from "react-redux";
import { removeTodo, changeTodoState } from "../../Redux/todos/todosActions";

//

const TodoItem = (props) => {
  const { id, todoName, createAt, remove, completed, changeState } = props;
  return (
    <div className={`todo-item ${completed && "todo-item--complete"}`}>
      <div className="todo-item__text">
        <p className="todo-item__name">{todoName}</p>
        <p className="todo-item__time">{moment(createAt).fromNow()}</p>
      </div>

      <button
        className={`todo-item__done  ${
          completed && "todo-item__done--disapled"
        }`}
        onClick={() => {
          changeState(id);
        }}
      >
        <MdDone />
      </button>

      <button className="todo-item__edit ">
        <MdEdit />
      </button>
      <button className="todo-item__delete" onClick={() => remove(id)}>
        <MdDelete />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeTodo(id)),
  changeState: (id) => dispatch(changeTodoState(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
