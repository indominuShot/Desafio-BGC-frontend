import ShopItem from '../../Components/ShopItem';
import { Container, ItemList } from './styles';

export default function Shop() {
  return (
    <Container>
      <ItemList>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </ItemList>
    </Container>
  );
}
