import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: purple;
  border: 3px solid purple;
  border-radius: 12px;
  padding: 0 15px;
  height: 50px;
  font-weight: 600;
  /* font-size: 1.05rem; */
  margin-left: 5px;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: purple;
    color: white;
  }
`;

export { Button };
