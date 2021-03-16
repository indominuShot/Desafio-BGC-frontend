import FormLogin from '../../Components/FormLogin';
import { Container, LogoContainer } from './styles';

export default function Login() {
  return (
    <Container>
      <FormLogin />

      <LogoContainer>
        <img src="/login-minion-background.png" alt="minions" />
      </LogoContainer>
    </Container>
  );
}
