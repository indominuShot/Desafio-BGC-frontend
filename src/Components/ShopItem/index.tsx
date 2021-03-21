import { useContext, useMemo } from 'react';
import { FaCheck as CheckIcon } from 'react-icons/fa';

import { shoppingCartContext } from '../../Contexts/ShoppingCarContext';
import _ShopItem from '../../@types/_ShopItem';
import numberToPtBrFormat from '../../Utils/numberToPtBrFormat';

import {
  Container,
  ItemImage,
  DescriptionContainer,
  ItemName,
  ItemDescription,
  BuyContainer,
  Button,
} from './styles';

interface _ShopItemProps {
  data: _ShopItem;
}

export default function ShopItem({ data }: _ShopItemProps) {
  const { addToCart, removeFromCart, reservedItems } = useContext(
    shoppingCartContext
  );

  const shopItemData = useMemo((): _ShopItem => {
    return {
      ...data,
    };
  }, [data]);

  return (
    <Container>
      <ItemImage src={shopItemData.imageURL} />

      <DescriptionContainer>
        <ItemName>{shopItemData.name}</ItemName>
        <ItemDescription>{shopItemData.description}</ItemDescription>

        <BuyContainer>
          <div>
            <span>Por apenas:</span>
            <strong>{numberToPtBrFormat(shopItemData.value)}</strong>
          </div>

          {reservedItems
            .map((reservedItem) => reservedItem.id)
            .includes(shopItemData.id) ? (
            <Button
              onClick={() => removeFromCart(shopItemData.id)}
              style={{ background: 'var(--green)', animation: 'none' }}
            >
              No carrinho
              <CheckIcon />
            </Button>
          ) : (
            <Button onClick={() => addToCart(shopItemData)}>Reservar</Button>
          )}
        </BuyContainer>
      </DescriptionContainer>
    </Container>
  );
}
