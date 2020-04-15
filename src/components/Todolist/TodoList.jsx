import React, { useMemo } from "react";

import { TodolistText, TodoListStyled } from "./todoListStyle";
import TodoItem from "../TodoItem/TodoItem";
import TodoListData from "../TodoListData/TodolistData";
import { useSelector, useDispatch } from "react-redux";
import { selectTargetTodos } from "../../Redux/todos/todosSelector";
import { removeAllTodos } from "../../Redux/todos/todosActions";
import TodoListHeader from "../TodolistHeader/TodoListHeader";

///////////////////////////

const TodoList = () => {
  ////////////////////logic
  const targetTodos = useSelector(selectTargetTodos);
  const dispatch = useDispatch();
  const memoListFooter = useMemo(() => {
    return <TodoListData />;
  }, []);

  ////////////////////view
  return (
    <div className="todo-List">
      <TodoListStyled>
        <TodoListHeader
          title="Today's todo"
          btnTitle="remove all"
          btnFunc={() => {
            dispatch(removeAllTodos(targetTodos));
          }}
          todos={targetTodos}
        />

        {targetTodos.length ? (
          <div className="todo-list__todos">
            {targetTodos.map((curr) => (
              <TodoItem key={curr.id} {...curr} />
            ))}{" "}
          </div>
        ) : (
          <TodolistText>There is nothing to show </TodolistText>
        )}

        {memoListFooter}
      </TodoListStyled>
    </div>
  );
};

//

export default TodoList;
