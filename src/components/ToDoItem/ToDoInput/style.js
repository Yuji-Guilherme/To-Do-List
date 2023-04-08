import styled from 'styled-components';

const ToDoInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  text-overflow: ellipsis;

  &:focus {
    outline: ${({ readOnly }) => (readOnly ? 'none' : '1px solid black')};
  }
`;

export { ToDoInput };
