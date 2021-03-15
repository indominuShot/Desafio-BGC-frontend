import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  width: 100%;
  height: 100%;
`;

export const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 80%;
  }
`;
