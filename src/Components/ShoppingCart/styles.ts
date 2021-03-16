import styled, { keyframes } from 'styled-components';

const expands = keyframes`
  0%{
    transform: scale(0.1);
  }
  100%{
    transform: scale(1)
  }
`;

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
  overflow: hidden;

  display: flex;
  flex-direction: column;

  padding: 1.4rem;

  animation: ${expands} 0.1s cubic-bezier(0.57, 0.68, 0.96, 0.52);

  @media (max-width: 585px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 3rem;

  display: grid;
  grid-template-columns: 14fr 1fr;
  align-items: center;
  align-content: center;

  padding: 1.2rem 1rem;
  margin-bottom: 1.4rem;

  > h3 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--black);
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;

    cursor: pointer;

    &:hover {
      > svg {
        fill: var(--red);
      }
    }

    > svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow-y: auto;

  ::-webkit-scrollbar {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: var(--outline);
  }
`;

export const ItemContainer = styled.div`
  width: 100%;
  height: 4.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  border: 1px solid var(--blue);
  padding: 0.4rem;

  & + div {
    margin-top: 1.3rem;
  }
`;

export const ItemImage = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: var(--black);
`;

export const ItemName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong:first-child {
    font-size: 1rem;
    font-weight: 700;
    color: var(--black);
  }

  > strong:last-child {
    font-size: 1rem;
    color: var(--white);

    max-width: 9.375rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  @media (max-width: 425px) {
    > strong:last-child {
      max-width: 8.5rem;
    }
  }
`;

export const ItemQty = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--white);
  }
`;

export const QtyControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4px;
  margin-left: 5px;
  border-radius: 5px;
  border: 1px solid var(--outline);

  > span {
    width: 100%;
    height: 2px;
    background: var(--outline);
    margin: 5px;
  }

  > svg {
    cursor: pointer;

    &:hover {
      filter: brightness(0.7);
    }
  }
  > svg:first-child {
    fill: var(--green);
  }
  > svg:last-child {
    fill: var(--red);
  }
`;

export const Remove = styled.div`
  max-width: 6rem;

  > svg {
    display: none;
    fill: var(--blue);
    width: 1.5rem;
    height: 1.5rem;
  }

  > button {
    font-size: 0.9rem;
    width: 100%;
    height: 2rem;
    padding: 0.2rem 1rem;
  }

  @media (max-width: 425px) {
    > button {
      display: none;
    }
    > svg {
      display: block;
    }
  }
`;
