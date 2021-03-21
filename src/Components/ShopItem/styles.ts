import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%{
    transform: scale(1, 1);
    box-shadow: inset 0 0 32px rgba(45, 90, 119, 0.7),
      inset 0 0 40px rgba(45, 90, 119, 0.8), 0 0 10px rgba(45, 90, 119, 0.5);

  }

  100%{
   transform:scale(1.1, 1.43);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--surface);

  max-width: 18rem;
  height: max-content;
  min-height: 30rem;

  padding: 3rem 1.7rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  border-radius: 8px;

  transition: all 0.2s;

  &:hover {
    box-shadow: var(--box-shadow-black-32);
    transform: scale(1.02);

    button:before {
      animation: ${pulse} 0.7s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    }
  }
`;

export const ItemImage = styled.img`
  width: 8rem;
  margin-bottom: 1.2rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const ItemName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
`;

export const ItemDescription = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--black);
  line-height: 20px;

  display: flex;
  align-items: center;
  flex: 1;
  margin: 1rem 0;
`;

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }

  > div > span {
    font-size: 1.3rem;
    font-weight: 700;
  }

  > div > strong {
    color: var(--green);
  }
`;

export const Button = styled.button`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-left: 1.4rem;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 5px;
    background: transparent;
    width: 100%;
    height: 100%;
  }
`;
