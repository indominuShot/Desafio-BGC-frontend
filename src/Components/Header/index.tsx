import { FaShoppingCart as CartIcon } from 'react-icons/fa';
import {
  Container,
  Title,
  UserContainer,
  ShoppingCart,
  UserAvatar,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Title>Minion Shop</Title>

      <UserContainer>
        <ShoppingCart>
          <CartIcon size={28} color="#fff" />
          <span>3</span>
        </ShoppingCart>
        <UserAvatar src="https://github.com/indominuShot.png" />
      </UserContainer>
    </Container>
  );
}
