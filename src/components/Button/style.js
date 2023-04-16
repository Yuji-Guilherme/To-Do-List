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

  @media only screen and (max-device-width : 1024px) {
    padding: 0 14px;
    height: 50px;
    font-size: 1rem;

    &:focus {
    transition: 0.3s;
    background-color: var(--btn-hover);
    }

  @media only screen and (max-device-width : 600px) {
    height: 47px;
    font-size: 0.95rem;
  }
  }
`;

export { Button };
