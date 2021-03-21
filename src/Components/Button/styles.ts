import styled, { keyframes } from 'styled-components';
import _Button from '../../@types/_Button';

const rotate = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(720deg);
  }
`;

export const Container = styled.button<_Button>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  color: ${({ textColor }) => textColor && textColor};

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > svg {
    color: ${({ textColor }) => textColor && textColor};
    animation: ${rotate} 1s infinite;

    > path {
      stroke-width: 40px;
    }
  }
`;
