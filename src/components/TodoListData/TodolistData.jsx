import React, { Fragment } from "react";
import "./TodolistData.scss";
import { connect } from "react-redux";
import {
  selectAll,
  selectUncompleted,
  selectCompleted,
  selectTodosType,
} from "../../Redux/todos/todosSelector";

import { changeTodosType } from "../../Redux/todos/todosActions";
import { createStructuredSelector } from "reselect";

//

const TodolistData = ({
  allTodos,
  completedTodos,
  uncompletedTodos,
  changeTypes,
  todosType,
}) => {
  const checkActive = (num) => num === todosType && "active";

  //
  return (
    <Fragment>
      {allTodos.length ? (
        <div className="list-data">
          <button
            className={`list-data__btn  list-data__btn--1 ${checkActive("3")}`}
            onClick={() => changeTypes("3")}
          >{`all (${allTodos.length})`}</button>
          <button
            className={`list-data__btn  list-data__btn--2 ${checkActive("1")}`}
            onClick={() => changeTypes("1")}
          >{`completed (${completedTodos})`}</button>
          <button
            className={`list-data__btn  list-data__btn--3 ${checkActive("2")}`}
            onClick={() => changeTypes("2")}
          >{`uncompleted (${uncompletedTodos})`}</button>
        </div>
      ) : null}
    </Fragment>
  );
};

//

const mapStateToprops = createStructuredSelector({
  allTodos: selectAll,
  completedTodos: selectCompleted,
  uncompletedTodos: selectUncompleted,
  todosType: selectTodosType,
});

const mapDispatchToProps = (dispatch) => ({
  changeTypes: (type) => dispatch(changeTodosType(type)),
});
export default connect(mapStateToprops, mapDispatchToProps)(TodolistData);
