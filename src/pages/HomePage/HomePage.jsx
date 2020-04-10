import React from "react";
import { HomePageStyled, HomePageContainer } from "./homePageStyle";
import TodoSearch from "../../components/TodoSearch/TodoSearch";
import TodoList from "../../components/Todolist/TodoList";
import AddTodo from "../../components/AddTodo/AddTodo";
const HomePage = () => {
  return (
    <div className="home-page">
      <HomePageStyled>
        <HomePageContainer>
          <TodoSearch />
          <TodoList />
          <AddTodo />
        </HomePageContainer>
      </HomePageStyled>
    </div>
  );
};

export default HomePage;
