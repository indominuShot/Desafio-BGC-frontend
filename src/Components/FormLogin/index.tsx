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
      <Form>
        <FormHeader>
          <h3>Faça o Login</h3>
        </FormHeader>

        <FormMain>
          <div>
            <span>Usuário</span>
            <Input type="text" placeholder="Digite..." />
          </div>

          <div>
            <span>Senha</span>
            <Input type="text" placeholder="Digite..." />
          </div>
        </FormMain>

        <FormFooter>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <span>ou</span>
          <button type="button">Cadastrar</button>
        </FormFooter>
      </Form>
    </Container>
  );
}
