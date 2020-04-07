import { createSelector } from "reselect";

const selectTodos = (state) => state.todosData;

export const selectAllTodos = createSelector(
  [selectTodos],

  (todosData) => {
    return [...todosData.incompletedTodos, ...todosData.completedTodos];
  }
);
