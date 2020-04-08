import { createSelector } from "reselect";

const selectTodos = (state) => state.todosData;

export const selectAll = createSelector([selectTodos], (data) => data.allTodos);

export const selectCompleted = createSelector(
  [selectAll],
  (allTodos) => allTodos.filter((todo) => todo.completed === true).length
);

export const selectUncompleted = createSelector(
  [selectAll],
  (allTodos) => allTodos.filter((todo) => todo.completed === false).length
);

export const selectTodosType = createSelector(
  [selectTodos],
  (todosData) => todosData.todosValue
);

export const selectTargetTodos = createSelector(
  [selectAll, selectTodosType],
  (todosData, todosValue) => {
    if (todosValue === "1") {
      return todosData.filter((todo) => todo.completed === true);
    } else if (todosValue === "2") {
      return todosData.filter((todo) => todo.completed === false);
    } else {
      return todosData;
    }
  }
);
