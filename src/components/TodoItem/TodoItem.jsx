import React from "react";
import "./TodoItem.scss";
import moment from "moment";
import { MdDelete } from "react-icons/md";
const TodoItem = ({ todoName, createAt }) => {
  return (
    <div className="todo-item">
      <div className="todo-item__text">
        <p className="todo-item__name">{todoName}</p>
        <p className="todo-item__time">{moment(createAt).fromNow()}</p>
      </div>
      <button className="todo-item__delete">
        <MdDelete />
      </button>
    </div>
  );
};

export default TodoItem;
