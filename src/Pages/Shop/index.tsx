import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';

import ShopItem from '../../Components/ShopItem';
import { Container, ItemList } from './styles';

export default function Shop() {
  const [minions, setMinions] = useState([]);

  useEffect(() => {
    API.get('serverless', '/', {
      headers: {},
      response: true,
    }).then((e) => setMinions(e.data.Items));
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
