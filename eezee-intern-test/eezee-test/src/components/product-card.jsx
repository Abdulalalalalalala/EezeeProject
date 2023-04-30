import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from './base-card';

const ProductCard = ({ product }) => {
  const { id, images, title, vipPriceFlag, bulkDiscountFlag, moq, highPriceOriginallPretty, lowPriceOriginallPretty,highPricelPretty, lowPricelPretty } = product;
  const imageUrl = images[0].url.replace(/%20/g, " ").trim();

  const productTags = [];

  if (moq) {
    productTags.push({ name: `MOQ: ${moq}`, color: 'moq-color' });
  }

  if (bulkDiscountFlag) {
    productTags.push({ name: 'Bulk Discount', color: 'bulk-discount-color' });
  }

  if (vipPriceFlag) {
    productTags.push({ name: 'VIP Price', color: 'vip-price-color' });
  }

  return (
    <Link href={`/product/${id}`}>
      
        <Card image={imageUrl} altText={title} className="h-full" tags={productTags}>
        <div className="product-card">
  <span className={`original-price ${highPriceOriginallPretty ? 'visible' : 'invisible'}`}>
    {highPricelPretty ? `${highPriceOriginalPretty}` : ' '}
  </span>
  <span className="current-price">
    <span className="currency-symbol">S$</span>{lowPricelPretty}
    {highPricelPretty && ` - S$${highPricelPretty}`}
  </span>
</div>

          <span className="mt-2">{title}</span>
          <style jsx>{`
            .product-card {
              flex-basis: calc(16.666% - 1rem);
              margin-right: 1rem;
              margin-bottom: 1rem;
              box-sizing: border-box;
              
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
