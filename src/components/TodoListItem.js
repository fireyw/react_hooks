import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";
import cn from "classnames";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;
const CheckBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }
`;
// const TextBox = styled.div`
//   display: flex;
//   flex: 1;
//   margin: auto;
// `;

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <Container>
      <CheckBox className={cn("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBox>
      <div>
        <MdRemoveCircleOutline />
      </div>
    </Container>
  );
};

export default TodoListItem;
