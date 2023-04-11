import styled from 'styled-components';

const Button = styled.button`
  background-color: #9e86c1;
  color: white;
  border-radius: 12px;
  padding: 0 15px;
  height: 55px;
  font-weight: 600;
  font-size: 1.05rem;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: #825cb9;
  }
`;

export { Button };
