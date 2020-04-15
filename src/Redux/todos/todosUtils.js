export const changeTodoState = (todos, payload) => {
  return todos.map((todo) => {
    if (todo.id === payload) {
      return { ...todo, completed: !todo.completed };
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

export const addTodoToTimeFrame = (state, todo) => {
  switch (todo.timeFrame) {
    case "yearly":
      return { ...state, yearlyTodos: [...state.yearlyTodo, todo] };

    case "monthly":
      return { ...state, monthlyTodos: [state.monthlyTodos, todo] };

    case "weekly":
      return { ...state, weeklyTodos: [...state.weeklyTodos, todo] };

    case "daily":
      return { ...state, dailyTodos: [state.dailyTodos, todo] };

    default:
      return state;
  }
};
