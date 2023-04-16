import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-color);

  @media only screen and (max-device-width : 1024px) {
   font-size : 2rem;
  }

  @media only screen and (max-device-width : 600px) {
    font-size: 1.8rem;
    margin-left: 2px;
  }
`;

export { Title };
