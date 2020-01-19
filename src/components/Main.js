import React, { useRef, useCallback } from "react";
import styled, { css } from "styled-components";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import { useState } from "react";

const Body = styled.body`
  display: flex;
  align-items: center; /*(수직정렬)*/
  justify-content: center; /*(수평 정렬)*/
`;
const Header = styled.header`
  border-bottom: 1px solid gray;
  padding-left: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  border: 1px solid gray;
`;
const Content = styled.section`
  display: flex;
  height: 600px;
`;
const Ma = styled.main`
  padding: 10px;
  width: 780px;
`;

function Main() {
  const [todos, setTodos] = useState([
    { id: 1, text: "영어 공부", checked: false },
    { id: 2, text: "React Study", checked: true }
  ]);
  const nextId = useRef(3);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  });
  return (
    <>
      <Body>
        <Container>
          <Header>
            <h1>trello-clone</h1>
          </Header>
          <Content>
            <Ma>
              <div>
                <TodoInsert onInsert={onInsert}></TodoInsert>
                <TodoList todos={todos}></TodoList>
              </div>
            </Ma>
          </Content>
        </Container>
      </Body>
    </>
  );
}

export default Main;
