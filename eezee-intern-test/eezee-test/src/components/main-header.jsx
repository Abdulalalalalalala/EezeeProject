import React, { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useCart } from '../contexts/cart-contexts';
import Cookies from 'js-cookie';

export default function MainHeader() {
  const { cartItems } = useCart();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const updateCartItemCount = (newCartItems) => {
      setCartItemCount(newCartItems.reduce((count, item) => count + item.quantity, 0));
    };
  
    const handleCartItemsUpdated = (e) => {
      updateCartItemCount(e.detail.cartItems);
    };
  
    // Initial update
    const storedCartItems = JSON.parse(Cookies.get('cartItems') || '[]');
    updateCartItemCount(storedCartItems);
  
    // Set up a listener for the cartItemsUpdated event
    window.addEventListener('cartItemsUpdated', handleCartItemsUpdated);
  
    // Clean up the event listener
    return () => {
      window.removeEventListener('cartItemsUpdated', handleCartItemsUpdated);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto flex items-center justify-start">
          <div className="px-4">
            <div className="flex -mx-2">
              <div className="mx-2 flex items-center">
                <div className="rounded-md overflow-hidden">
                  <img className='h-3.5 w-5 object-cover' src='https://storage.googleapis.com/eezee-storage/flags/SG.png' />
                </div>
              </div>
              <div className="mx-2 flex items-center">
                <span className="text-sm text-gray-800 font-medium">Singapore</span>
              </div>
              <div className="mx-2 flex items-center">
                <a  target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center">
                    <div className="h-3 w-3">
                      <span className="img">
                        <span className='relative'>
                          <img src="https://storage.googleapis.com/imgez/icons/phone-icon-grey-secondary.svg" />
                        </span>
                      </span>
                    </div>
                    <div className="ml-2">
                      <span className="text-sm text-gray-800 font-medium">+65 6797 9688</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="ctn-eezee-logo flex items-center">
          <a href="/">
            <img alt="Logo" src="https://storage.googleapis.com/imgez/eezee-logos/logo-on-white-nopadding.svg" className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36" />
          </a>
        </div>
        <div className="flex items-center">
          <div className="mx-2">
          <a href="/">
          <div className="cart-icon-container relative">
            <img alt="Cart" src="https://storage.googleapis.com/imgez/icons/cart-icon.svg" className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8" />
            <span className="cart-count absolute top-0 right-0 bg-blue-500 text-white rounded-full text-xs font-semibold w-4 h-4 flex items-center justify-center">{cartItemCount}</span>
          </div>
        </a>
          </div>
         
        </div>
      </div>
    </div>
    
    
  );
}
