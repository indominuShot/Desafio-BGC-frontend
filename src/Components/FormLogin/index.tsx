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
  const [error, setError] = useState(false);

  const { handleUserLogin } = useContext(userContext);

  const route = useHistory();

  useEffect(() => {
    if (password.length < 8) {
      setError(true);
    } else {
      setError(false);
    }
  }, [password]);

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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </FormMain>

        <FormFooter>
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={error}
          >
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
