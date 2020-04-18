import React, { useEffect } from "react";
import {
  TodoItemButton,
  TodoItemStyled,
  TodoItemTexts,
  TodoItemsTools,
} from "./todoItemStyle";
import moment from "moment";
import { MdDelete, MdEdit, MdDone, MdLockOpen } from "react-icons/md";

import { useDispatch } from "react-redux";
import { removeTodo, changeTodoState } from "../../Redux/todos/todosActions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTargetTodos, isNested } from "../../Redux/todos/todosSelector";
import {
  changeTodoToComplete,
  changeTodoToUncomplete,
} from "../../Redux/todos/todosActions";

//

const TodoItem = (props) => {
  const {
    id,
    todoName,
    createAt,
    completed,
    editMode,
    timeFrame,
    todoSearchData,
    parentId,
  } = props;

  const dispatch = useDispatch();
  const history = useHistory();

  const targetTodos = useSelector((state) => {
    return !editMode && selectTargetTodos(state, todoSearchData);
  });

  const checkAllTodos = (todos, parentTodoId, goUp) => {
    let allcompleted = true;
    todos.forEach((todo) => {
      if (todo.completed === false) {
        allcompleted = false;
      }
    });

    if (allcompleted) {
      dispatch(changeTodoToComplete(parentTodoId));
    } else {
      dispatch(changeTodoToUncomplete(parentTodoId));
    }
  };

  //check for complete parent in every change in todo State
  useEffect(() => {
    // if we are in detaild page
    try {
      if (todoSearchData.parentId) {
        checkAllTodos(targetTodos, todoSearchData.parentId);
      } else if (parentId) {
        // if we Are in Time page
        const filterdTodos = targetTodos.filter(
          (todo) => todo.parentId === parentId
        );
        checkAllTodos(filterdTodos, parentId);
      }
    } catch (e) {}
  }, [completed]);

  // check if todo is a parent to hide complete checker

  const ifNested = useSelector((state) => isNested(state, id));
  //////////view

  return (
    <TodoItemStyled active={completed && true} edit={editMode ? true : false}>
      <TodoItemTexts>
        <p>{editMode ? editMode.inputValue : todoName}</p>
        <p>{moment(createAt).fromNow()}</p>
      </TodoItemTexts>

      <TodoItemsTools>
        {!ifNested && (
          <TodoItemButton
            done
            active={completed && true}
            onClick={() => {
              dispatch(changeTodoState(id));
              editMode && history.push(`/${timeFrame}-todos`);
            }}
          >
            <MdDone />
          </TodoItemButton>
        )}

        {timeFrame !== "daily" && (
          <TodoItemButton lock onClick={() => history.push(`/${id}`)}>
            <MdLockOpen />
          </TodoItemButton>
        )}

        {!editMode && !completed ? (
          <TodoItemButton edit onClick={() => history.push(`/edit/${id}`)}>
            <MdEdit />
          </TodoItemButton>
        ) : null}

        <TodoItemButton
          delete
          active={completed && true}
          onClick={() => {
            dispatch(removeTodo(id));
            editMode && history.push(`/${timeFrame}-todos`);
          }}
        >
          <MdDelete />
        </TodoItemButton>
      </TodoItemsTools>
    </TodoItemStyled>
  );
};

export default React.memo(TodoItem);
