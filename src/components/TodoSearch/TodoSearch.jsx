import React from "react";
import "./TodoSearch.scss";
import { connect } from "react-redux";
import { selectTodosType } from "../../Redux/todos/todosSelector";
import { changeTodosType } from "../../Redux/todos/todosActions";
import { setFilter } from "../../Redux/Filter/filterActions";
import { selectFilterValue } from "../../Redux/Filter/filterSelector";

const TodoSearch = ({ selectedValue, changeTodos, filter, setFilterValue }) => {
  const handelSelectChange = (e) => {
    const target = e.target.value;
    changeTodos(target);
  };

  const handelInputChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="todo-search">
      <form className="todo-search__form">
        <input
          placeholder="Search for todos"
          className="todo-search__search-input"
          value={filter}
          onChange={handelInputChange}
        />
        <select
          className="todo-search__select"
          onChange={handelSelectChange}
          value={selectedValue}
        >
          <option value="1"> Completed</option>
          <option value="2">Uncompleted</option>
          <option value="3">All</option>
        </select>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeTodos: (type) => dispatch(changeTodosType(type)),
  setFilterValue: (value) => dispatch(setFilter(value)),
});

const mapStateToProps = (state) => ({
  selectedValue: selectTodosType(state),
  filter: selectFilterValue(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoSearch);
