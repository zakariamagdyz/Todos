import React, { Fragment } from "react";
import { ListDataStyled, ListDataButton } from "./todolistDataStyle";
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
  const checkActive = (num) => (num === todosType ? true : false);

  //
  return (
    <div className="todo-list-data">
      {allTodos.length ? (
        <ListDataStyled>
          <ListDataButton
            all
            activeAll={checkActive("3")}
            onClick={() => changeTypes("3")}
          >{`all (${allTodos.length})`}</ListDataButton>
          <ListDataButton
            completed
            align
            activeCompleted={checkActive("1")}
            onClick={() => changeTypes("1")}
          >{`completed (${completedTodos})`}</ListDataButton>
          <ListDataButton
            unCompleted
            activeUnCompleted={checkActive("2")}
            onClick={() => changeTypes("2")}
          >{`uncompleted (${uncompletedTodos})`}</ListDataButton>
        </ListDataStyled>
      ) : null}
    </div>
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
