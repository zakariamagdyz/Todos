import { createSelector } from "reselect";
import { selectFilterValue } from "../Filter/filterSelector";

const selectTodos = (state) => state.todosData;

export const selectAll = createSelector([selectTodos], (data) => data.allTodos);

export const selectCompleted = createSelector(
  [
    selectAll,
    (_, props) => ({ timeFrame: props.timeFrame, parentId: props.parentId }),
  ],
  (allTodos, { timeFrame, parentId }) => {
    if (parentId) {
      return allTodos
        .filter((todo) => todo.parentId === parentId)
        .filter((todo) => todo.completed === true).length;
    } else {
      return allTodos
        .filter((todo) => todo.timeFrame === timeFrame)
        .filter((todo) => todo.completed === true).length;
    }
  }
);

export const selectUncompleted = createSelector(
  [
    selectAll,
    (_, props) => ({ timeFrame: props.timeFrame, parentId: props.parentId }),
  ],
  (allTodos, { timeFrame, parentId }) => {
    if (parentId) {
      return allTodos
        .filter((todo) => todo.parentId === parentId)
        .filter((todo) => todo.completed === false).length;
    } else {
      return allTodos
        .filter((todo) => todo.timeFrame === timeFrame)
        .filter((todo) => todo.completed === false).length;
    }
  }
);

export const selectTodosType = createSelector(
  [selectTodos],
  (todosData) => todosData.todosValue
);

const targetTodos = (
  timeFrame,
  filterValue,
  allTodos,
  parentId,
  isCompleted
) => {
  const todos = parentId
    ? allTodos.filter((todo) => todo.parentId === parentId)
    : allTodos;
  if (isCompleted !== undefined) {
    return todos
      .filter((todo) => todo.timeFrame === timeFrame)
      .filter((todo) => todo.completed === isCompleted)
      .filter((todo) =>
        todo.todoName.toLowerCase().includes(filterValue.toLowerCase())
      );
  } else {
    return todos
      .filter((todo) => todo.timeFrame === timeFrame)
      .filter((todo) =>
        todo.todoName.toLowerCase().includes(filterValue.toLowerCase())
      );
  }
};

export const selectTargetTodos = createSelector(
  [
    selectAll,
    selectTodosType,
    selectFilterValue,
    (_, props) => ({ timeFrame: props.timeFrame, parentId: props.parentId }),
  ],

  (todosData, todosValue, filterValue, { timeFrame, parentId }) => {
    if (todosValue === "1") {
      return targetTodos(timeFrame, filterValue, todosData, parentId, true);
    } else if (todosValue === "2") {
      return targetTodos(timeFrame, filterValue, todosData, parentId, false);
    } else {
      return targetTodos(timeFrame, filterValue, todosData, parentId);
    }
  }
);

export const selectEditedTodo = createSelector(
  [selectAll, (_, params) => params],
  (todos, id) => {
    return todos.find((todo) => todo.id === id);
  }
);
