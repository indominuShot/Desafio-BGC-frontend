import { useContext } from 'react';
import { FaShoppingCart as CartIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { shoppingCartContext } from '../../Contexts/ShoppingCarContext';
import { userContext } from '../../Contexts/userContext';

import { Container, Title, UserContainer, ShoppingCart } from './styles';

export default function Header() {
  const { isLogged, handleUserLogout } = useContext(userContext);
  const { openCart, reservedItems } = useContext(shoppingCartContext);

  async function handleLogout() {
    await handleUserLogout();
  }

  return (
    <Container>
      <Link to="/">
        <Title>Minion Shop</Title>
      </Link>

      <UserContainer>
        <ShoppingCart onClick={openCart}>
          <CartIcon size={28} color="#fff" />
          <span
            style={{
              color: reservedItems.length > 0 ? 'var(--green)' : 'var(--red)',
            }}
          >
            {reservedItems.length}
          </span>
        </ShoppingCart>

        {isLogged ? (
          <Link
            to="/login"
            onClick={handleLogout}
            style={{ color: 'var(--white)' }}
          >
            Sair
          </Link>
        ) : (
          <Link to="/login" style={{ color: 'var(--white)' }}>
            Login
          </Link>
        )}
      </UserContainer>
    </Container>
  );
}
