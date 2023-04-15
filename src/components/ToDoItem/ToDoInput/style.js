import styled from 'styled-components';

const ToDoInput = styled.input`
  width: 80%;
  height: 100%;
  background-color: transparent;
  margin: 0 auto 0 5px;
  text-overflow: ellipsis;
  color: var(--primary-color);

  &:focus {
    outline: ${({ readOnly }) => (readOnly ? 'none' : '1px solid black')};
  }
`;

export { ToDoInput };
