import styled from 'styled-components';

const ToDoItem = styled.li`
  height: 60px;
  width: 500px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  background-color: #ececec;
  border-radius: 12px;

  &.checked {
    background-color: #9e86c1;
    transition: .5s;

    & > input {
      text-decoration: line-through;
      color: white;
    }
    & > button {
      transition: .3s;
      color: white;
    }
  }
`;

export { ToDoItem };
