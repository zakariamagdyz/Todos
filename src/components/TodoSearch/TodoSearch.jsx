import React from "react";
import "./TodoSearch.scss";

const TodoSearch = () => {
  return (
    <div className="todo-search">
      <form>
        <input placeholder="Search your Todo"></input>
        <select>
          <option> date</option>
          <option> name</option>
        </select>
      </form>
    </div>
  );
};

export default TodoSearch;
