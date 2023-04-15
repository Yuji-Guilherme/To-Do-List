import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--btn-color);
  color: var(--checked-color);
  border-radius: 12px;
  padding: 0 15px;
  height: 55px;
  font-weight: 600;
  font-size: 1.05rem;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: var(--btn-hover);
  }
`;

export { Button };
