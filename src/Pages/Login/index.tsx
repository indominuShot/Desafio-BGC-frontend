import FormLogin from '../../Components/FormLogin';
import { Container, LogoContainer } from './styles';

export default function Login() {
  return (
    <Container>
      <FormLogin />

      <LogoContainer>
        <img
          src="https://lh3.googleusercontent.com/proxy/dlvdaLxezvpIg8XzzesHt5qeC_vOrhuFVkfoPOMZFiMN7lWRAOAPBUlARoulFwqu3VNNQLxWDCLHfXBJr2TIQaMPMTQt0vOrXy93PH02--bAAoVxnQuq_kIXDDEXXw"
          alt="minions"
        />
      </LogoContainer>
    </Container>
  );
}
