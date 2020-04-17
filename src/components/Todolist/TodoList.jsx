import React, { useMemo } from "react";

import { TodolistText, TodoListStyled } from "./todoListStyle";
import TodoItem from "../TodoItem/TodoItem";
import TodoListData from "../TodoListData/TodolistData";
import { useDispatch, useSelector } from "react-redux";
import { removeAllTodos } from "../../Redux/todos/todosActions";
import TodoListHeader from "../TodolistHeader/TodoListHeader";
import { selectTargetTodos } from "../../Redux/todos/todosSelector";

///////////////////////////

const TodoList = ({ timeFrame, title, parentId, targetDetaildTodo }) => {
  ////////////////////logic
  const dispatch = useDispatch();

  const todoSearchData = {
    timeFrame,
    parentId,
  };
  let targetTodos = useSelector((state) =>
    selectTargetTodos(state, todoSearchData)
  );

  const memoListFooter = useMemo(() => {
    return <TodoListData todoSearchData={todoSearchData} />;
  }, [todoSearchData]);

  const allTimeFrames = ["yearly", "monthly", "weekly", "daily"];
  const getMonth = () => {
    return allTimeFrames.findIndex((month) => month === timeFrame);
  };
  const time = allTimeFrames[getMonth() - 1];

  ////////////////////view
  return (
    <div className="todo-List">
      <TodoListStyled>
        <TodoListHeader
          title={title}
          btnTitle="remove all"
          btnFunc={() => {
            dispatch(removeAllTodos(targetTodos));
          }}
          todos={targetTodos}
          time={time}
        />

        {targetTodos.length ? (
          <div className="todo-list__todos">
            {targetTodos.map((curr) => (
              <TodoItem
                key={curr.id}
                {...curr}
                todoSearchData={todoSearchData}
              />
            ))}
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
