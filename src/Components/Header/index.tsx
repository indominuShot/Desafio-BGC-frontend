import { useContext } from 'react';
import { FaShoppingCart as CartIcon } from 'react-icons/fa';
import { shoppingCartContext } from '../../Contexts/ShoppingCarContext';
import {
  Container,
  Title,
  UserContainer,
  ShoppingCart,
  UserAvatar,
} from './styles';

export default function Header() {
  const { openCart, reservedItems } = useContext(shoppingCartContext);

  return (
    <Container>
      <Title>Minion Shop</Title>

      <UserContainer>
        <ShoppingCart onClick={openCart}>
          <CartIcon size={28} color="#fff" />
          <span>{reservedItems.length}</span>
        </ShoppingCart>

        <UserAvatar src="https://github.com/indominuShot.png" />
      </UserContainer>
    </Container>
  );
}
