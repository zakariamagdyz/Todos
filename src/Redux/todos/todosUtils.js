export const changeTodoState = (todos, payload) => {
  return todos.map((todo) => {
    if (todo.id === payload) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });
};

export const removeAllSection = (allTodos, targetTodos) => {
  return allTodos.filter((todo) => {
    let notExist = true;
    targetTodos.forEach((toto) => {
      if (toto.id === todo.id) {
        notExist = false;
      }
    });

    return notExist;
  });
};
