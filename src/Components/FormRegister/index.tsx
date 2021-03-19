import { FormEvent, useEffect, useState } from 'react';
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

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [isWaitingVerification, setIsWaitingVerification] = useState(
    false
  );

  useEffect(() => {
    if (password !== passwordConfirm || password.length < 8) {
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
      .then((event) => {
        console.log(event);
        setIsWaitingVerification(true);
      })
      .catch((error: _AuthAwsError) => {
        setIsloading(false);
        verifyUserAccess(error.message);
      });
  }

  if (isWaitingVerification) {
    return (
      <ConfirmAuthCodeBox userName={email} password={password} />
    );
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
              placeholder="Digite..."
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Confirmar senha </span>
            <Input
              error={error}
              type="password"
              placeholder="Digite..."
              required
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
        </FormMain>

        <FormFooter>
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={error}
          >
            Confirmar
          </Button>
        </FormFooter>
      </Form>
    </Container>
  );
}
