export const changeTodoState = (todos, payload) => {
  return todos.map((todo) => {
    if (todo.id === payload) {
      return { ...todo, completed: !todo.completed };
    }

    return todo;
  });
};

export const changeToComplete = (todos, payload) => {
  return todos.map((todo) => {
    if (todo.id === payload) {
      return { ...todo, completed: true };
    }

    return todo;
  });
};

export const changeToUncomplete = (todos, payload) => {
  return todos.map((todo) => {
    if (todo.id === payload) {
      return { ...todo, completed: false };
    }

    return todo;
  });
};
export const changeTodoName = (todos, payload) => {
  return todos.map((todo) => {
    if (todo.id === payload.id) {
      return {
        ...todo,
        todoName: payload.name,
        createAt: new Date().getTime(),
      };
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
