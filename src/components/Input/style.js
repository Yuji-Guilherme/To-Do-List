import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  min-width: 250px;
  height: 55px;
  border-radius: 12px;
  padding: 0 15px;
  background-color: var(--input-color);
  color: var(--secondary-color);
  border: 3px solid var(--input-border);
  font-weight: 500;
  outline: none;

  @media only screen and (max-device-width: 1024px) {
    height: 50px;
  }

  @media only screen and (max-device-width: 600px) {
    height: 47px;
  }
`;

export { Input };
