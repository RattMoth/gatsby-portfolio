import styled from 'styled-components';

export const CheckBoxLabel = styled.label`
  user-select: none;
  padding: 0 1rem;
  color: #96979c;
  border: 2px solid #96979c;
  border-radius: 3px;
  cursor: pointer;
`;
export const CheckBox = styled.input`
  user-select: none;
  opacity: 0;
  z-index: 1;
  border: 2px solid #96979c;
  border-radius: 3px;
  }
  &:checked + ${CheckBoxLabel} {
    background: #cccae1;
    color: #fff;
    &::after {
      border-radius: 50%;
      width: 18px;
      height: 18px;
      transition: 0.5s;
    }
  }
`;
