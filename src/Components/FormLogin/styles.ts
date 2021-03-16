import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4rem 2.8rem;

  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  padding: 2rem 4rem;
  height: 100%;
  width: 100%;
  max-width: 28.875rem;
  background: var(--surface);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  box-shadow: 0 0 32px var(--black);

  @media (max-width: 425px) {
    padding: 2rem;
  }
`;

export const FormHeader = styled.header`
  width: 100%;

  > h3 {
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const FormMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    > span {
      font-size: 1rem;
      font-weight: 600;
      color: var(--black);
    }
  }

  > div + div {
    margin-top: 2rem;
  }
`;

export const Input = styled.input`
  width: 100%;

  & + input {
    margin-top: 1.5rem;
  }
`;

export const FormFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;

  > span {
    font-size: 1rem;
    font-weight: 600;
    margin: 0.4rem;
  }

  > button {
    width: 100%;
  }
`;
