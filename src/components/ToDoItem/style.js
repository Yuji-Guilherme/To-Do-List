import styled from 'styled-components';

const ToDoItem = styled.li`
  height: 60px;
  width: 500px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  background-color: var(--to-do-color);
  border-radius: 12px;

  &.checked {
    background-color: var(--to-do-checked);
    transition: 0.5s;

    & > input {
      text-decoration: line-through;
      color: var(--checked-color);
    }
    & > button {
      transition: 0.3s;
      color: var(--checked-color);
    }
  }
`;

export { ToDoItem };
