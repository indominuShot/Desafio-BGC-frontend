import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2.75rem;
  width: 100%;
  height: 4rem;

  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
`;

export const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--yellow);
  text-shadow: -6px 6px 4px #000;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #e5e5e5;
  margin-right: 1rem;
`;

export const UserAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border: 2px solid var(--outline);
  border-radius: 50%;
`;
