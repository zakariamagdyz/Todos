import { createSelector } from "reselect";
import { selectFilterValue } from "../Filter/filterSelector";

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

const targetTodos = (filterValue, todos, completed) => {
  if (completed !== undefined) {
    return todos
      .filter((todo) => todo.completed === completed)
      .filter((todo) =>
        todo.todoName.toLowerCase().includes(filterValue.toLowerCase())
      );
  } else {
    return todos.filter((todo) =>
      todo.todoName.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
};

export const selectTargetTodos = createSelector(
  [selectAll, selectTodosType, selectFilterValue],
  (todosData, todosValue, filterValue) => {
    if (todosValue === "1") {
      return targetTodos(filterValue, todosData, true);
    } else if (todosValue === "2") {
      return targetTodos(filterValue, todosData, false);
    } else {
      return targetTodos(filterValue, todosData);
    }
  }
);

export const selectEditedTodo = createSelector(
  [selectAll, (_, props) => props.match.params.todoId],
  (todos, id) => {
    return todos.find((todo) => todo.id === id);
  }
);
