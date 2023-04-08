import styled from 'styled-components';

const ToDoItem = styled.li`
  height: 50px;
  width: 400px;
  display: flex;
  align-items: center;
  background-color: #dbdbdb;

  &.checked {
    background-color: pink;

    & > p {
      text-decoration: line-through;
    }
  }
`;

export { ToDoItem };
