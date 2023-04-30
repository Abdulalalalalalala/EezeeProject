import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";


export default function MainHeader() {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const updateCartItemCount = (newCartItems) => {
      const newCount = newCartItems.reduce((count, item) => count + item.quantity, 0);
    setCartItemCount(newCount);
    console.log("Updated cart count:", newCount);
    };

    const handleCartItemsUpdated = (e) => {
      updateCartItemCount(e.detail.cartItems);
    };

    // Initial update
    const storedCartItems = JSON.parse(Cookies.get("cartItems") || "[]");
    updateCartItemCount(storedCartItems);

    // Set up a listener for the cartItemsUpdated event
    window.addEventListener("cartItemsUpdated", handleCartItemsUpdated);

    // Clean up the event listener
    return () => {
      window.removeEventListener("cartItemsUpdated", handleCartItemsUpdated);
    };
  }, []);


  return (
    <div className="bg-gray-100">
      <div className="bg-gray-200 py-2">
        <div className="container mx-auto flex items-center">
          <div className="px-4 flex">
            <div className="mx-2 flex items-center">
              <img
                className="h-3.5 w-5 object-cover rounded-md overflow-hidden"
                src="https://storage.googleapis.com/eezee-storage/flags/SG.png"
              />
              <span className="text-sm text-gray-800 font-medium ml-2">
                Singapore
              </span>
            </div>
            <div className="mx-2 flex items-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <img
                  src="https://storage.googleapis.com/imgez/icons/phone-icon-grey-secondary.svg"
                  className="h-3 w-3"
                  alt="Phone icon"
                />
                <span className="text-sm text-gray-800 font-medium ml-2">
                  +65 6797 9688
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="ctn-eezee-logo">
          <a href="/">
            <img
              alt="Logo"
              src="https://storage.googleapis.com/imgez/eezee-logos/logo-on-white-nopadding.svg"
              className="w-40 pl-3"
            />
          </a>
        </div>
        <div className="mx-2 pr-3">
          <a href="/">
            <div className="cart-icon-container relative">
              <img
                alt="Cart"
                src="https://storage.googleapis.com/imgez/icons/cart-icon.svg"
              />
              <span className="cart-count absolute top-0 right-0 bg-blue-700 text-white rounded-full text-xs font-semibold w-4 h-4 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                {cartItemCount}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
