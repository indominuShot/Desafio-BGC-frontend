import {
  Container,
  Title,
  UserContainer,
  UserName,
  UserAvatar,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Title>Minion Shop</Title>

      <UserContainer>
        <UserName>Luan</UserName>
        <UserAvatar src="https://github.com/indominuShot.png" />
      </UserContainer>
    </Container>
  );
}
