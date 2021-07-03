import React from "react";
import styled from "styled-components";

import { GroupButton, Button, Input } from "Components";

const TodoWrapper = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  border-radius: 12px;
  margin: 10px;
`;

const TodoRowNumber = styled.div`
  width: 8%;
  text-align: center;
  padding: 10px;
`;

const TodoRowText = styled.div`
  width: 55%;
  max-width: 65%;
  text-align: center;
  padding: 10px;
  word-wrap: break-word;
`;

export default function ToDo(props) {
  return (
    <TodoWrapper>
      <TodoRowNumber>{props.index}</TodoRowNumber>
      {props.todo.is_editing === true ? (
        <Input
          value={props.todo.text}
          onChange={(e) => props.changeTodoText(e, props.todo)}
        />
      ) : (
        <TodoRowText onClick={(e) => props.onStartEdit(e, props.todo)}>
          {props.todo["text"]}
        </TodoRowText>
      )}

      <div style={{ width: "25%", display: "flex" }}>
        {props.todo.status === "Archived" ? (
          <Button
            onClick={(e) => props.onArchive(e, props.todo, true)}
            display={"inline"}
          >
            Un Archive
          </Button>
        ) : props.todo.status === "Completed" ? (
          <>
            {props.todo.is_editing === true ? (
              <Button
                onClick={(e) => props.SaveToDo(props.todo)}
                display={"inline"}
              >
                Save
              </Button>
            ) : (
              <>
                <Button
                  onClick={(e) => props.onStartEdit(e, props.todo)}
                  display={"inline"}
                >
                  Edit
                </Button>
                <Button
                  onClick={(e) => props.onArchive(e, props.todo)}
                  display={"inline"}
                >
                  Archive
                </Button>
              </>
            )}
          </>
        ) : props.todo.is_editing === true ? (
          <Button
            onClick={(e) => props.SaveToDo(props.todo)}
            display={"inline"}
          >
            Save
          </Button>
        ) : (
          <>
            <Button
              onClick={(e) => props.onStartEdit(e, props.todo)}
              display={"inline"}
            >
              Edit
            </Button>
            <Button
              onClick={(e) => props.onDone(e, props.todo)}
              display={"inline"}
            >
              Mark as Completed
            </Button>
            <Button
              onClick={(e) => props.onArchive(e, props.todo)}
              display={"inline"}
            >
              Archive
            </Button>
          </>
        )}
      </div>
    </TodoWrapper>
  );
}
