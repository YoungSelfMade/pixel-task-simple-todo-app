import React, { useState } from "react";
import styled from "styled-components";
import { Button, Flex, Input } from "Components";
import { useDispatch, useSelector } from "react-redux";
import { AddToDoAction } from "Redux/Actions";

const WrapperStyled = styled.div`
  background-color: #fff;
  width: 25%;
  border-radius: 12px;
  padding: 15px;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-right: 30px;
`;

export default function AddToDo() {
  const dispatch = useDispatch();
  const { TODOS } = useSelector((state) => state.globalStorage);
  const [newTodo, setNewTodo] = useState("");

  const submitNewTodo = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      return;
    }

    const todo_data = {};
    todo_data["id"] = TODOS.length + 1;
    todo_data["text"] = newTodo;
    todo_data["status"] = "TODO";
    todo_data["date"] = new Date();
    todo_data["is_editing"] = false;

    dispatch(AddToDoAction(todo_data));

    setNewTodo("");
  };

  return (
    <WrapperStyled>
      <Flex justify="center" align={"center"} flexDirection={"column"}>
        <h1>Add a ToDo</h1>
        <form style={{ width: "100%" }} onSubmit={submitNewTodo}>
          <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        </form>
        <Button
          style={{ marginTop: "20px" }}
          onClick={submitNewTodo}
          display={"inline"}
        >
          Submit
        </Button>
      </Flex>
    </WrapperStyled>
  );
}
