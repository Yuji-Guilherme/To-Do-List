import styled from 'styled-components';

const Label = styled.label`
  background-color: #222;
  color: white;
  width: 65px;
  height: 32px;
  border-radius: 20px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  position: relative;
  transition: 0.2s;

  & > svg {
    width: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  & input:checked + span {
    transform: translateX(31px);
  }

  @media only screen and (max-device-width : 1024px) {
    height: 30px;
    width: 60px;
    padding: 0 6px;
    font-size: 0.9rem;

    & input:checked + span {
    transform: translateX(29px);
  }
  }
`;

const ThemeSwitch = styled.input`
  appearance: none;
`;

const Ball = styled.span`
  background-color: white;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  left: 4px;
  bottom: 3px;
  transform: translateX(0px);
  transition: 0.3s;
  position: absolute;

  @media only screen and (max-device-width : 1024px) {
    height: 24px;
    width: 24px;
    left: 3px;
  }

  @media only screen and (max-device-width : 600px) {
    left: 4px;
  }
`;

export { Label, ThemeSwitch, Ball };
