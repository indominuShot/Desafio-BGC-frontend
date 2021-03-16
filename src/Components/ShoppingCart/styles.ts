import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(20px);
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 28rem;
  max-width: 40rem;

  background: var(--surface);
  border-radius: 10px;
  border: 2px solid var(--outline);
`;
