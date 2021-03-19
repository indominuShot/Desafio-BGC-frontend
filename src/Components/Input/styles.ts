import styled from 'styled-components';
import _Input from '../../@types/_Input';

export const Container = styled.input<_Input>`
  width: 100%;

  box-shadow: ${({ error }) => error && '0 0 1px 1px var(--red)'};

  &:focus {
    box-shadow: ${({ error }) => error && '0 0 1px 1px var(--red)'};
  }
`;
