import { FormEvent, useContext, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

import _AuthAwsError from '../../@types/_AuthAwsError';
import verifyUserAccess from '../../Utils/verifyUserAccess';

import {
  Container,
  Form,
  FormHeader,
  FormMain,
  FormFooter,
  Input,
} from './styles';
import Button from '../Button';
import ConfirmAuthCodeBox from '../ConfirmAuthCodeBox';
import { userContext } from '../../Contexts/userContext';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isPasswordsDivergents, setError] = useState(false);

  const { isWaitingVerificationCode, waitForVerificationCode } = useContext(
    userContext
  );

  useEffect(() => {
    if (password !== passwordConfirm) {
      setError(true);
    } else {
      setError(false);
    }
  }, [password, passwordConfirm]);

  function handleRegister(event: FormEvent) {
    event.preventDefault();
    setIsloading(true);

    Auth.signUp({
      username: email,
      password,
    })
      .then(() => {
        waitForVerificationCode();
      })
      .catch((error: _AuthAwsError) => {
        setIsloading(false);
        verifyUserAccess(error.message);
      });
  }

  if (isWaitingVerificationCode) {
    return <ConfirmAuthCodeBox userName={email} password={password} />;
  }

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <FormHeader>
          <h3>Cadastre-se</h3>
        </FormHeader>

        <FormMain>
          <div>
            <span>Email</span>
            <Input
              placeholder="Digite..."
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <span>Senha</span>
            <Input
              type="password"
              minLength={8}
              placeholder="Digite..."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Confirmar senha </span>
            <Input
              error={isPasswordsDivergents}
              minLength={8}
              type="password"
              placeholder="Digite..."
              required
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--white)',
              }}
            >
              Senha no mínimo de 8 caracteres
            </span>
          </div>
        </FormMain>

        <FormFooter>
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isPasswordsDivergents}
          >
            {isPasswordsDivergents ? 'Senhas não conferem' : 'Confirmar'}
          </Button>
        </FormFooter>
      </Form>
    </Container>
  );
}
