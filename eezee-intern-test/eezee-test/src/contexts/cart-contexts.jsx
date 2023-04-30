import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const getInitialCartItems = () => {
    if (typeof window === 'undefined') {
      return [];
    }

    // Read cart data from cookies and parse it as JSON
    const storedCartItems = JSON.parse(Cookies.get('cartItems') || '[]');

    // If there are cart items in cookies, return them; otherwise, return an empty array
    return storedCartItems || [];
  };

  const [cartItems, setCartItems] = useState(getInitialCartItems);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Update cookies whenever cartItems state changes
    Cookies.set('cartItems', JSON.stringify(cartItems), { expires: 7 }); // Set cookie to expire in 7 days
  }, [cartItems]);

  const addItemToCart = (item, quantity) => {
    let updatedCartItems;
  
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
    } else {
      updatedCartItems = [...cartItems, { ...item, quantity }];
    }
  
    setCartItems(updatedCartItems);
  
    // Dispatch a custom event after updating the cart items
    const updateEvent = new CustomEvent('cartItemsUpdated', {
      detail: { cartItems: updatedCartItems },
    });
    window.dispatchEvent(updateEvent);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
