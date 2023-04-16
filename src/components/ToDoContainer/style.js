import styled from 'styled-components';

const ToDoContainer = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media only screen and (max-device-width: 600px) {
    width: 99%;
    gap: 12px;
  }
`;

export { ToDoContainer };
