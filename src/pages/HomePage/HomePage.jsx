import React from "react";
import "./homePage.scss";
import TodoSearch from "../../components/TodoSearch/TodoSearch";
import TodoList from "../../components/Todolist/TodoList";
import AddTodo from "../../components/AddTodo/AddTodo";
const HomePage = () => {
  return (
    <div className="container ">
      <div className="home-page">
        <div className="todo-container">
          <TodoSearch />
          <TodoList />
          <AddTodo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
