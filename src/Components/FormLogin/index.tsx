import { FormEvent, useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  Container,
  Form,
  FormHeader,
  FormMain,
  FormFooter,
  Input,
} from './styles';
import Button from '../Button';
import { userContext } from '../../Contexts/userContext';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  const { handleUserLogin, cancelWaitForVerificationCode } = useContext(
    userContext
  );

  const route = useHistory();

  useEffect(() => {
    cancelWaitForVerificationCode();
    //eslint-disable-next-line
  }, []);

  function handleLogin(event: FormEvent) {
    event.preventDefault();
    setIsloading(true);

    handleUserLogin(email, password).then((loginSucceeded) => {
      if (loginSucceeded) {
        setIsloading(false);
        route.push('/');
      } else {
        setIsloading(false);
      }
    });
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <FormHeader>
          <h3>Faça o Login</h3>
        </FormHeader>

        <FormMain>
          <div>
            <span>Email</span>
            <Input
              type="email"
              placeholder="Digite..."
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
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              style={{
                fontSize: '0.7rem',
                color: 'var(--white)',
                marginTop: '0.3rem',
              }}
            >
              Senha no mínimo de 8 caracteres
            </span>
          </div>
        </FormMain>

        <FormFooter>
          <Button type="submit" isLoading={isLoading}>
            Login
          </Button>
          <span>ou</span>
          <Button
            type="button"
            backgroundColor="var(--yellow)"
            hoverColor="#756426"
            textColor="var(--black)"
          >
            <Link to="/register">Cadastrar</Link>
          </Button>
        </FormFooter>
      </Form>
    </Container>
  );
}
