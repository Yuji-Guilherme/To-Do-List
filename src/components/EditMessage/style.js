import styled from 'styled-components';

const EditMessage = styled.p`
  align-self: flex-start;
  margin-bottom: 15px;
  color: var(--primary-color);

  @media only screen and (max-device-width: 600px) {
    font-size: 0.95rem;
    margin: 0 0 8px 4px;
  }
`;

export { EditMessage };
