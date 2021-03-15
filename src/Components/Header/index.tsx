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
      <Title>MinionShop</Title>

      <UserContainer>
        <UserName>Username</UserName>
        <UserAvatar src="https://github.com/indominuShot.png" />
      </UserContainer>
    </Container>
  );
}
