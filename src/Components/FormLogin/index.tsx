import { useHistory } from 'react-router-dom';

import {
  Container,
  Form,
  FormHeader,
  FormMain,
  FormFooter,
  Input,
} from './styles';

export default function FormLogin() {
  const route = useHistory();

  function handleLogin() {
    route.push('/shop');
  }

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <FormHeader>
          <h3>Faça o Login</h3>
        </FormHeader>

        <FormMain>
          <div>
            <span>Usuário</span>
            <Input type="text" placeholder="Digite..." required />
          </div>

          <div>
            <span>Senha</span>
            <Input type="text" placeholder="Digite..." required />
          </div>
        </FormMain>

        <FormFooter>
          <button type="submit">Login</button>
          <span>ou</span>
          <button type="button">Cadastrar</button>
        </FormFooter>
      </Form>
    </Container>
  );
}
