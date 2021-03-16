import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  padding: 0 2.75rem;
  width: 100%;
  height: 4rem;

  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export const Title = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--yellow);
  text-shadow: -6px 6px 4px #000;
  letter-spacing: 8px;

  @media (max-width: 550px) {
    font-size: 1.3rem;
  }

  @media (max-width: 412px) {
    font-size: 1.3rem;
    letter-spacing: 3px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ShoppingCart = styled.div`
  font-size: 0;
  position: relative;
  margin-right: 1.7rem;
  padding: 0.6rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: var(--surface);
  }

  > span {
    font-size: 1rem;
    font-weight: 600;
    color: red;

    position: absolute;
    top: -5px;
    right: -5px;
  }
`;

export const UserAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border: 2px solid var(--outline);
  border-radius: 50%;
`;
