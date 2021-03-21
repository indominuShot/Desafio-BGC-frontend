import { createContext, ReactNode, useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import _ShopItem from '../@types/_ShopItem';
import { ShoppingCart } from '../Components/ShoppingCart';

interface _ShoppingCartProps {
  children: ReactNode;
}

interface _ShoppingCarData {
  reservedItems: _ShopItem[];
  cartIsActive: boolean;
  amount: number;
  closeCart: () => void;
  openCart: () => void;
  addToCart: (item: _ShopItem) => void;
  removeFromCart: (itemID: string) => void;
  updateCartToUp: (itemID: string) => void;
  updateCartToDown: (itemID: string) => void;
  confirmPurchase: () => Promise<undefined | boolean>;
}

export const shoppingCartContext = createContext({} as _ShoppingCarData);

export function ShoppingCartProvider({ children }: _ShoppingCartProps) {
  const [reservedItems, setReservedItems] = useState<_ShopItem[]>([]);
  const [cartIsActive, setCartIsActive] = useState<boolean>(false);
  const [amount, setAmount] = useState(0);

  // Pega possível carrinho de compras armazenado no localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem('shoppingCart');

    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);

      setReservedItems(parsedItems);
    }
  }, []);

  useEffect(() => {
    if (reservedItems.length > 0) {
      const total = reservedItems
        .map((item) => item.value * item.quantityReserved)
        .reduce((previous, next) => previous + next);

      setAmount(total);
    } else {
      setAmount(0);
    }
  }, [reservedItems]);

  function closeCart() {
    setCartIsActive(false);
  }

  function openCart() {
    setCartIsActive(true);
  }

  function addToCart(item: _ShopItem) {
    const alreadyInCart = reservedItems;

    localStorage.setItem(
      'shoppingCart',
      JSON.stringify([...alreadyInCart, item])
    );

    setReservedItems([...alreadyInCart, { ...item, quantityReserved: 1 }]);
  }

  function removeFromCart(itemID: string) {
    const filteredItems = reservedItems.filter((item) => item.id !== itemID);

    localStorage.setItem('shoppingCart', JSON.stringify(filteredItems));

    setReservedItems(filteredItems);
  }

  function updateCartToUp(itemID: string) {
    const updatedItems = reservedItems.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          quantityReserved: item.quantityReserved + 1,
        };
      } else {
        return item;
      }
    });

    localStorage.setItem('shoppingCart', JSON.stringify(updatedItems));

    setReservedItems(updatedItems);
  }

  function updateCartToDown(itemID: string) {
    const updatedItems = reservedItems.map((item) => {
      if (item.id === itemID && item.quantityReserved > 1) {
        return {
          ...item,
          quantityReserved: item.quantityReserved - 1,
        };
      } else {
        return item;
      }
    });

    localStorage.setItem('shoppingCart', JSON.stringify(updatedItems));

    setReservedItems(updatedItems);
  }

  async function confirmPurchase() {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const parsedUserData = JSON.parse(userData);

      API.post('serverless', '/sale/create', {
        body: parsedUserData,
      });
    } else {
      return false;
    }
  }

  return (
    <shoppingCartContext.Provider
      value={{
        amount,
        reservedItems,
        cartIsActive,
        confirmPurchase,
        updateCartToDown,
        updateCartToUp,
        closeCart,
        openCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}

      {cartIsActive && <ShoppingCart />}
    </shoppingCartContext.Provider>
  );
}
