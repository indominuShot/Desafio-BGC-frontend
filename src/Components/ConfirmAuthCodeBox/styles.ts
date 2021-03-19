import styled from 'styled-components';
import InputCode from 'react-verification-code-input';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VerificationBox = styled.form`
  max-width: 30rem;
  width: 100%;
  height: 16rem;
  background: var(--surface);
  box-shadow: var(--box-shadow-black-32);
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const CodeInput = styled(InputCode)`
  && {
    margin-bottom: 1.3rem;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    input {
      border: 2px solid var(--outline);
      border-radius: 5px;
      max-width: 2.3rem;
      min-width: 2.3rem;
      max-height: 4rem;

      color: var(--white);
    }

    input + input {
      margin-left: 0.2rem;
    }

    input:focus {
      border: 2px solid var(--yellow);
    }
  }
`;

export const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--black);
  text-align: center;

  margin: 1rem 0;

  > span {
    color: var(--white);
    font-size: 0.8rem;
    margin-left: 1rem;
  }
`;
