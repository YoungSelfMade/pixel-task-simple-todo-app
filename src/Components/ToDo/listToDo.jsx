import React, { useState } from "react";
import styled from "styled-components";
import { Button, Flex, GroupButton, ToDo } from "Components";

import { useSelector, useDispatch } from "react-redux";
import { EditToDoAction } from "Redux/Actions";

const WrapperStyled = styled.div`
  background-color: #fff;
  width: 50%;
  border-radius: 12px;
  padding: 15px;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export default function ListToDo(props) {
  const dispatch = useDispatch();
  const { TODOS } = useSelector((state) => state.globalStorage);
  const [dataType, setDataType] = useState("TODO");
  const allDataTypes = ["TODO", "Completed", "Archived"];

  const archiveTodo = (todo, unArchive = false) => {
    const index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS[index]["status"] = unArchive === true ? "TODO" : "Archived";
    dispatch(EditToDoAction(TODOS));
  };

  const setToDoDone = (todo) => {
    const index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS[index]["status"] = "Completed";
    dispatch(EditToDoAction(TODOS));
  };
  const startEditingTodo = (e, todo) => {
    const index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS[index]["is_editing"] = true;
    dispatch(EditToDoAction(TODOS));
  };

  const changeTodoText = (e, todo) => {
    const index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS[index]["text"] = e.target.value;
    dispatch(EditToDoAction(TODOS));
  };

  const saveToDoChanges = (todo) => {
    const index = TODOS.findIndex((t) => t.id === todo.id);
    TODOS[index]["is_editing"] = false;
    dispatch(EditToDoAction(TODOS));
  };

  return (
    <>
      <WrapperStyled>
        <GroupButton>
          {allDataTypes.map((d_type, index) => {
            return (
              <Button
                onClick={() => setDataType(d_type)}
                key={`${d_type}-${index}`}
                theme={d_type === dataType ? "normal" : "outline"}
                space
                width={"25%"}
                display={"inline"}
              >
                {d_type} ({TODOS.filter((f) => f.status === d_type).length})
              </Button>
            );
          })}
        </GroupButton>
        <Flex justify="center" align={"center"} flexDirection={"column"}>
          {TODOS.filter((f) => {
            if (dataType === f["status"]) {
              return true;
            } else {
              return false;
            }
          }).map((todo, index) => {
            return (
              <ToDo
                index={index + 1}
                key={`todo-${index}`}
                todo={todo}
                onDone={(e, todo_obj) => setToDoDone(todo_obj)}
                onStartEdit={(e, todo_obj) => startEditingTodo(e, todo_obj)}
                changeTodoText={(e, todo_obj) => changeTodoText(e, todo_obj)}
                SaveToDo={(todo_obj) => saveToDoChanges(todo_obj)}
                onArchive={(e, todo_obj, unArchive) =>
                  archiveTodo(todo_obj, unArchive)
                }
              />
            );
          })}
        </Flex>
      </WrapperStyled>
    </>
  );
}
