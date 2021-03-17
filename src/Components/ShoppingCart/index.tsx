import { useContext } from 'react';
import {
  FaPlusCircle as UpIcon,
  FaMinusCircle as DownIcon,
} from 'react-icons/fa';
import { RiCloseCircleFill as CloseIcon } from 'react-icons/ri';
import { shoppingCartContext } from '../../Contexts/ShoppingCarContext';

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
} from './styles';

interface _ReservedItemProps {
  itemName: string;
  quantity: number;
}

export function ShoppingCart() {
  const { closeCart, reservedItems } = useContext(shoppingCartContext);

  const ReservedItem = ({ itemName, quantity }: _ReservedItemProps) => {
    return (
      <ItemContainer>
        <ItemImage src="https://www.jing.fm/clipimg/full/87-871470_minion-transparent-background-png-transparent-evil-minion-png.png" />
        <ItemName>
          <strong>Produto</strong>
          <strong>{itemName}</strong>
        </ItemName>

        <ItemQty>
          <span>{quantity}</span>

          <QtyControl>
            <UpIcon />
            <span></span>
            <DownIcon />
          </QtyControl>
        </ItemQty>

        <Remove>
          <button>remover</button>
          <CloseIcon />
        </Remove>
      </ItemContainer>
    );
  };
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
            <ReservedItem
              itemName={item.name}
              quantity={item.quantityReserved}
            />
          ))}
        </Content>
      </Container>
    </Overlay>
  );
}
