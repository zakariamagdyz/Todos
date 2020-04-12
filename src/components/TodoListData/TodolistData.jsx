import React from "react";
import { ListDataStyled, ListDataButton } from "./todolistDataStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAll,
  selectUncompleted,
  selectCompleted,
  selectTodosType,
} from "../../Redux/todos/todosSelector";
import { changeTodosType } from "../../Redux/todos/todosActions";

//

const TodolistData = () => {
  const checkActive = (num) => (num === todosType ? true : false);
  const dispatch = useDispatch();
  const allTodos = useSelector(selectAll);
  const completedTodos = useSelector(selectCompleted);
  const unCompletedTodos = useSelector(selectUncompleted);
  const todosType = useSelector(selectTodosType);
  //
  return (
    <div className="todo-list-data">
      {allTodos.length ? (
        <ListDataStyled>
          <ListDataButton
            all
            active={checkActive("3")}
            onClick={() => dispatch(changeTodosType("3"))}
          >{`all (${allTodos.length})`}</ListDataButton>
          <ListDataButton
            completed
            align
            active={checkActive("1")}
            onClick={() => dispatch(changeTodosType("1"))}
          >{`completed (${completedTodos})`}</ListDataButton>
          <ListDataButton
            unCompleted
            active={checkActive("2")}
            onClick={() => dispatch(changeTodosType("2"))}
          >{`uncompleted (${unCompletedTodos})`}</ListDataButton>
        </ListDataStyled>
      ) : null}
    </div>
  );
};

//

export default TodolistData;
