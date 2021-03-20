import { useContext } from 'react';
import { shoppingCartContext } from '../../Contexts/ShoppingCarContext';
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
  data: any;
}

export default function ShopItem({ data }: _ShopItemProps) {
  const { addToCart } = useContext(shoppingCartContext);

  return (
    <Container>
      <ItemImage src="https://www.jing.fm/clipimg/full/87-871470_minion-transparent-background-png-transparent-evil-minion-png.png" />

      <DescriptionContainer>
        <ItemName>{data.name}</ItemName>
        <ItemDescription>
          Este minion está preparado para fazer qualquer tipo de coisa errada
        </ItemDescription>

        <BuyContainer>
          <div>
            <span>Por apenas:</span>
            <strong>R$ {data.locationValue}</strong>
          </div>

          <Button onClick={addToCart}>Reservar</Button>
        </BuyContainer>
      </DescriptionContainer>
    </Container>
  );
}
