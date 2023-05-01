import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from './card';

const ProductCard = ({ product }) => {
  // Destructure required properties from product object
  const { id, images, title, vipPriceFlag, bulkDiscountFlag, moq, highPriceOriginalPretty, lowPriceOriginalPretty, highPricePretty, lowPricePretty, currencySymbol } = product;
  
  // Replace URL-encoded spaces with actual spaces, and trim the resulting string
  const imageUrl = images[0].url.replace(/%20/g, " ").trim();

  // Create an array to store product tags
  const productTags = [];

  // If the product has a minimum order quantity (MOQ), add a tag to the productTags array
  if (moq) {
    productTags.push({ name: `MOQ: ${moq}`, color: 'moq-color' });
  }

  // If the product has a bulk discount flag, add a tag to the productTags array
  if (bulkDiscountFlag) {
    productTags.push({ name: 'Bulk Discount', color: 'bulk-discount-color' });
  }

  // If the product has a VIP price flag, add a tag to the productTags array
  if (vipPriceFlag) {
    productTags.push({ name: 'VIP Price', color: 'vip-price-color' });
  }

  // Render the product card
  return (
    <Link href={`/product/${id}`}>
      <Card image={imageUrl} altText={title} className="h-full" tags={productTags}>
        <div className="product-card">
          <div className="price-container">
            {highPricePretty && (
              <span className="original-price">
                {highPriceOriginalPretty}
              </span>
            )}
            <span className="current-price">
              <span className="currency-symbol">{currencySymbol}</span>
              {lowPricePretty.replace(currencySymbol, '')}
              {highPricePretty && ` - `}
              {highPricePretty && <span className="currency-symbol">{currencySymbol}</span>}
              {highPricePretty && highPricePretty.replace(currencySymbol, '')}
            </span>
          </div>
        </div>
        <span className="mt-2">{title}</span>
        <style jsx>{`
          .product-card {
            flex-basis: calc(16.666% - 1rem);
            margin-right: 1rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          
          .price-container {
            display: flex;
            flex-direction: column;
            min-height: 2.5rem; /* Adjust this value according to your design */
            justify-content: center;
          }
          
          .original-price {
            font-size: 0.75rem;
            text-decoration: line-through;
            color: #718096;
          }
          
          .current-price {
            font-size: 1.125rem;
            font-weight: 700;
            color: #2563eb;
            display: flex;
          }
          
          .currency-symbol {
            font-size: 0.7rem;
            position: relative;
            top: -0.1875rem;
            margin-right: 0.125rem;
          }
          
          .invisible {
            visibility: hidden;
          }
        `}</style>
      </Card>
    </Link>
  );
};

export default ProductCard;
