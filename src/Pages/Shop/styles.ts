import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 3rem;
`;

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  align-items: center;
  justify-content: center;
  gap: 3rem;

  width: 100%;
  height: max-content;
  padding-bottom: 3rem;
`;
