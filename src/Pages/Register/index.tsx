import FormRegister from '../../Components/FormRegister';
import { Container, LogoContainer } from './styles';

export default function Login() {
  return (
    <Container>
      <FormRegister />

      <LogoContainer>
        <img src="/login-minion-background.png" alt="minions" />
      </LogoContainer>
    </Container>
  );
}
