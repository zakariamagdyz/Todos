export const changeTodoState = (todos, payload) => {
  return todos.map((todo) => {
    if (todo.id === payload) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });
};
