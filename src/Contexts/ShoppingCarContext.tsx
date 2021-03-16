import { createContext, ReactNode, useState } from 'react';
import _ShopItem from '../@types/_ShopItem';
import { ShoppingCart } from '../Components/ShoppingCart';

interface _ShoppingCartProps {
  children: ReactNode;
}

interface _ShoppingCarData {
  reservedItems: _ShopItem[];
  cartIsActive: boolean;
}

export const shoppingCartContext = createContext({} as _ShoppingCarData);

export function ShoppingCartProvider({ children }: _ShoppingCartProps) {
  const [reservedItems, setReservedItems] = useState<_ShopItem[]>([]);
  const [cartIsActive, setCartIsActive] = useState<boolean>(true);

  return (
    <shoppingCartContext.Provider
      value={{
        reservedItems,
        cartIsActive,
      }}
    >
      {children}

      {cartIsActive && <ShoppingCart />}
    </shoppingCartContext.Provider>
  );
}
