import {
  Container,
  ItemImage,
  DescriptionContainer,
  ItemName,
  ItemDescription,
  BuyContainer,
  Button,
} from './styles';

export default function ShopItem() {
  return (
    <Container>
      <ItemImage src="https://www.jing.fm/clipimg/full/87-871470_minion-transparent-background-png-transparent-evil-minion-png.png" />

      <DescriptionContainer>
        <ItemName> Minion doidão de droga</ItemName>
        <ItemDescription>
          Este minion está preparado para fazer qualquer tipo de coisa errada
        </ItemDescription>

        <BuyContainer>
          <div>
            <span>Por apenas:</span>
            <strong>R$ 19,99</strong>
          </div>

          <Button>Comprar</Button>
        </BuyContainer>
      </DescriptionContainer>
    </Container>
  );
}
