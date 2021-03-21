import { useContext, useState } from 'react';
import {
  FaPlusCircle as UpIcon,
  FaMinusCircle as DownIcon,
} from 'react-icons/fa';
import { RiCloseCircleFill as CloseIcon } from 'react-icons/ri';
import { useHistory } from 'react-router';

import _ShopItem from '../../@types/_ShopItem';
import { shoppingCartContext } from '../../Contexts/ShoppingCarContext';
import numberToPtBrFormat from '../../Utils/numberToPtBrFormat';
import Button from '../Button';

import {
  Container,
  Overlay,
  ItemContainer,
  ItemImage,
  ItemName,
  ItemQty,
  QtyControl,
  Header,
  Content,
  Remove,
  Footer,
  RequestLoginContainer,
} from './styles';

interface _ReservedItem {
  itemData: _ShopItem;
}

export function ShoppingCart() {
  const [isRequestLogin, setIsRequestLogin] = useState(false);

  const {
    amount,
    reservedItems,
    closeCart,
    removeFromCart,
    updateCartToUp,
    updateCartToDown,
    confirmPurchase,
  } = useContext(shoppingCartContext);

  const route = useHistory();

  const ReservedItem = ({ itemData }: _ReservedItem) => {
    return (
      <ItemContainer>
        <ItemImage src={itemData.imageURL} />
        <ItemName>
          <strong>Produto</strong>
          <strong>{itemData.name}</strong>
        </ItemName>

        <ItemQty>
          <span>{itemData.quantityReserved}</span>

          <QtyControl>
            <UpIcon onClick={() => updateCartToUp(itemData.id)} />
            <span></span>
            <DownIcon onClick={() => updateCartToDown(itemData.id)} />
          </QtyControl>
        </ItemQty>

        <Remove>
          <button onClick={() => removeFromCart(itemData.id)}>remover</button>
          <CloseIcon
            style={{ margin: 'auto' }}
            onClick={() => removeFromCart(itemData.id)}
          />
        </Remove>
      </ItemContainer>
    );
  };

  const RequestLoginBox = () => {
    return (
      <Overlay>
        <RequestLoginContainer>
          <strong>Faça o login para confirmar a compra</strong>
          <img src="/minions-party.png" alt="minions" />
          <div>
            <Button
              onClick={() => {
                setIsRequestLogin(false);
                closeCart();
                route.push('/login');
              }}
            >
              Fazer login
            </Button>
            <Button onClick={() => setIsRequestLogin(false)}>Cancelar</Button>
          </div>
        </RequestLoginContainer>
      </Overlay>
    );
  };

  async function handleConfirmPurchase() {
    const isConfirmed = await confirmPurchase();

    if (isConfirmed === false) {
      setIsRequestLogin(true);
    }
  }

  if (isRequestLogin) {
    return <RequestLoginBox />;
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <h3>Seus itens</h3>

          <div onClick={closeCart}>
            <CloseIcon />
          </div>
        </Header>

        <Content>
          {reservedItems.map((item) => (
            <ReservedItem key={item.id} itemData={item} />
          ))}
        </Content>

        <Footer>
          <strong>
            Valor total: <strong>{numberToPtBrFormat(amount)}</strong>
          </strong>
          <Button
            style={{ background: 'var(--green)' }}
            onClick={handleConfirmPurchase}
          >
            Confirmar compra
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
