import { createContext, ReactNode, useState } from 'react';
import _ShopItem from '../@types/_ShopItem';
import { ShoppingCart } from '../Components/ShoppingCart';

interface _ShoppingCartProps {
  children: ReactNode;
}

interface _ShoppingCarData {
  reservedItems: _ShopItem[];
  cartIsActive: boolean;
  closeCart: () => void;
  openCart: () => void;
  addToCart: () => void;
}

export const shoppingCartContext = createContext({} as _ShoppingCarData);

export function ShoppingCartProvider({ children }: _ShoppingCartProps) {
  const [reservedItems, setReservedItems] = useState<_ShopItem[]>([]);
  const [cartIsActive, setCartIsActive] = useState<boolean>(false);

  function closeCart() {
    setCartIsActive(false);
  }

  function openCart() {
    setCartIsActive(true);
  }

  function addToCart() {
    const alreadyInCart = reservedItems;

    setReservedItems([
      ...alreadyInCart,
      {
        id: '1',
        name: 'teste',
        value: 19.99,
        description: 'teste',
        quantityReserved: 2,
      },
    ]);
  }

  return (
    <shoppingCartContext.Provider
      value={{
        reservedItems,
        cartIsActive,
        closeCart,
        openCart,
        addToCart,
      }}
    >
      {children}

      {cartIsActive && <ShoppingCart />}
    </shoppingCartContext.Provider>
  );
}
