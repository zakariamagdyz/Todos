import React from "react";
import "./TodoSearch.scss";
import { connect } from "react-redux";
import { selectTodosType } from "../../Redux/todos/todosSelector";
import { changeTodosType } from "../../Redux/todos/todosActions";

const TodoSearch = ({ selectedValue, changeTodos }) => {
  const handelChange = (e) => {
    const target = e.target.value;
    changeTodos(target);
  };

  return (
    <div className="todo-search">
      <form className="todo-search__form">
        <input
          placeholder="Search for todos"
          className="todo-search__search-input"
        />
        <select
          className="todo-search__select"
          onChange={handelChange}
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
});

const mapStateToProps = (state) => ({
  selectedValue: selectTodosType(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoSearch);
