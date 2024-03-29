import styled from 'styled-components';

const Label = styled.label`
  background-color: var(--check-box-background);
  width: 15px;
  height: 15px;
  margin: 0 6px;
  border-radius: 5px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  & > input:checked {
    &::after {
      content: '';
      display: block;
      left: 2px;
      top: 3px;
      width: 8px;
      height: 3px;
      color: black;
      border: 3px solid var(--to-do-checked);
      border-right: transparent;
      border-top: transparent;
      border-radius: 2px;
      transform: rotate(320deg);
      position: absolute;
    }
  }
`;

const CheckBox = styled.input`
  appearance: none;
`;

export { Label, CheckBox };
