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
    }).then((e: any) => setMinions(e.data.Items));

    /*  API.post('serverless', '/sale/create', {
      headers: {},
      response: true,
    }).then((e) => console.log(e)); */
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
