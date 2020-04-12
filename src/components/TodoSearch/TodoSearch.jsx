import React from "react";
import {
  TodoSearchForm,
  TodoSearchSelect,
  TodoSearchInput,
} from "./todoSearchStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectTodosType } from "../../Redux/todos/todosSelector";
import { changeTodosType } from "../../Redux/todos/todosActions";
import { setFilter } from "../../Redux/Filter/filterActions";
import { selectFilterValue } from "../../Redux/Filter/filterSelector";

const TodoSearch = () => {
  // config
  const dispatch = useDispatch();
  const selectedValue = useSelector(selectTodosType);
  const selectFilter = useSelector(selectFilterValue);

  // fns
  const handelSelectChange = (e) => {
    const target = e.target.value;
    dispatch(changeTodosType(target));
  };

  const handelInputChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="todo-search">
      <TodoSearchForm>
        <TodoSearchInput
          value={selectFilter}
          onChange={handelInputChange}
        ></TodoSearchInput>

        <TodoSearchSelect onChange={handelSelectChange} value={selectedValue}>
          <option value="1"> Completed</option>
          <option value="2">Uncompleted</option>
          <option value="3">All</option>
        </TodoSearchSelect>
      </TodoSearchForm>
    </div>
  );
};

export default TodoSearch;
