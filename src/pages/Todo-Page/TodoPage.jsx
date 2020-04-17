import React from "react";
import { HomePageStyled, HomePageContainer } from "./TodoPage.style";
import TodoSearch from "../../components/TodoSearch/TodoSearch";
import TodoList from "../../components/Todolist/TodoList";
import AddTodo from "../../components/AddTodo/AddTodo";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEditedTodo } from "../../Redux/todos/todosSelector";

////////////////////////////////

const TodoPage = ({ title, timeFrame }) => {
  const params = useParams() || null;
  const history = useHistory();

  // get target elment to open detaild page if it exist
  const targetDetaildTodo = useSelector((state) =>
    selectEditedTodo(state, params.parentId)
  );

  ///////// if it detaild page we should change the time frame - 1

  const checkIfDetaildPage = () => {
    if (targetDetaildTodo) {
      const allTimeFrames = ["yearly", "monthly", "weekly", "daily"];
      const getMonth = () => {
        return allTimeFrames.findIndex(
          (month) => month === targetDetaildTodo.timeFrame
        );
      };
      const rightTimeFrame = targetDetaildTodo
        ? allTimeFrames[getMonth(targetDetaildTodo) + 1]
        : timeFrame;

      return rightTimeFrame;
    }
  };

  const detaildTimeFrame = checkIfDetaildPage();

  // select the right time frame  detaild page or time page

  const RightTimeFrame = detaildTimeFrame || timeFrame;

  // if user try ro go to detaild page of daily time frame it will back to home Page

  if (!RightTimeFrame) {
    history.push("/");
  }

  ///////////////

  return (
    <div className="home-page">
      <HomePageStyled>
        <HomePageContainer>
          <TodoSearch />
          <TodoList
            title={
              targetDetaildTodo ? `${targetDetaildTodo.todoName} steps` : title
            }
            timeFrame={RightTimeFrame}
            parentId={params.parentId}
          />
          <AddTodo timeFrame={RightTimeFrame} parentId={params.parentId} />
        </HomePageContainer>
      </HomePageStyled>
    </div>
  );
};

export default TodoPage;
