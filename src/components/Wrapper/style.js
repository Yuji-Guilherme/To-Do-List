import styled from 'styled-components';

const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  height: auto;
  padding: 40px 20px;

  @media only screen and (max-device-width: 1024px) {
    width: 550px;
  }

  @media only screen and (max-device-width: 600px) {
    width: 90%;
    padding: 30px 0px;
  }
`;

export { Wrapper };
