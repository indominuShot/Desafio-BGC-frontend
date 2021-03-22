import { useEffect, useState } from 'react';

import products from '../../Services/products.json';
import ShopItem from '../../Components/ShopItem';
import { Container, ItemList } from './styles';

export default function Shop() {
  const [minions, setMinions] = useState<any[]>([]);

  useEffect(() => {
    /* API.get('serverless', '/minions', {
      headers: {},
      response: true,
    }).then((e: any) => setMinions(e.data.Items)); */

    setMinions(products.Items);
  }, []);

  return (
    <Container>
      <ItemList>
        {minions.map((minion: any) => (
          <ShopItem key={minion.id} data={minion} />
        ))}
      </ItemList>
    </Container>
  );
}
