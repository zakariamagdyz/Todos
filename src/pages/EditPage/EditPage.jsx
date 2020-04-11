import React, { useEffect } from "react";
import TodoListHeader from "../../components/TodolistHeader/TodoListHeader";
import { TodoListStyled } from "../../components/Todolist/todoListStyle";
import TodoItem from "../../components/TodoItem/TodoItem";
import AddTodo from "../../components/AddTodo/AddTodo";
import { EditPageContainer } from "./EditPage.style";
import { connect } from "react-redux";
import { selectEditedTodo } from "../../Redux/todos/todosSelector";
import { changeTodoName } from "../../Redux/todos/todosActions";
import { setTodoEdit } from "../../Redux/addForm/addFormActions";
import { selectEditValue } from "../../Redux/addForm/addFormSelectore";
import { setError } from "../../Redux/addForm/addFormActions";
import { Redirect } from "react-router-dom";

const EditPage = ({
  history,
  todo,
  changeName,
  setName,
  editValue,
  setErrorValue,
}) => {
  useEffect(() => {
    setName(todo && todo.todoName);
  }, []);

  const handelEditChange = (e) => {
    setName(e.target.value);
  };

  if (!todo) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="edit-page">
        <EditPageContainer>
          <TodoListStyled edit>
            <TodoListHeader
              title="Edit todo"
              btnTitle="back home"
              goHome
              btnFunc={() => {
                history.push("/");
                setErrorValue(null);
              }}
            />
            {todo && <TodoItem editMode {...todo} editValue={editValue} />}
          </TodoListStyled>

          <AddTodo
            editMode
            editInputValue={editValue}
            editHandelChange={handelEditChange}
            editTodo={changeName}
            todoId={todo.id}
          />
        </EditPageContainer>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  todo: selectEditedTodo(props.match.params.todoId)(state),
  editValue: selectEditValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeName: (data) => dispatch(changeTodoName(data)),
  setName: (value) => dispatch(setTodoEdit(value)),
  setErrorValue: (msg) => dispatch(setError(msg)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
