import React from 'react';
import Layout from '@/components/layout';
import Title from '../components/title';
import BrandCard from '../components/brand-card';
import ProductCard from '../components/product-card';

import brandsData from '../data/brands.json';
import productData from '../data/products.json';

const Index = () => {
  const displayedBrands = brandsData.slice(0, 6); // Show only the first 4 brands
  const displayedProducts = productData.slice(0, 12); // Show only the first 12 products
  const firstRow = displayedProducts.slice(0, 6); // Get the first 6 products
  const secondRow = displayedProducts.slice(6, 12); // Get the next 6 products

  return (
    <>

      <Layout title="Home Page">
        <div>
          {/* Add the banner */}
          <div className="banner custom-max-width container"></div>

          <Title
            mainTitle="Featured Brands"
            subTitle="Browse the full catalog of brands today"
            viewMoreLink="/all-brands"
          />
          <div className="brands-row custom-max-width container mx-auto flex items-center justify-start">
            {displayedBrands.map((brand, index, arr) => {
              const duplicateIndex = arr.findIndex(b => b.id === brand.id);
              if (duplicateIndex !== index) {
                console.log(`Duplicate data found for brand id ${brand.id}. Skipping...`);
                return null;
              }
              return <BrandCard key={brand.id} brand={brand} />;
            })}
          </div>

          {/* Add the Title component for products */}
          <Title
            mainTitle="Our Products"
            subTitle="Browse the full catalog of products today"
            viewMoreLink="/all-products"
          />
          {/* Render product cards here */}
          <div className="product-grid container custom-max-width">
            <div className="product-row justify-start items-center">
              {(firstRow || []).map((product, index, arr) => {
                const duplicateIndex = arr.findIndex(p => p.id === product.id);
                if (duplicateIndex !== index) {
                  console.log(`Duplicate data found for product id ${product.id}. Skipping...`);
                  return null;
                }
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
            <div className="product-row justify-start items-center">
              {(secondRow || []).map((product, index, arr) => {
                const duplicateIndex = arr.findIndex(p => p.id === product.id);
                if (duplicateIndex !== index) {
                  console.log(`Duplicate data found for product id ${product.id}. Skipping...`);
                  return null;
                }
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
          </div>

        </div>
        <style jsx>{`
        .container {
          display: flex;
          
        }
        .brands-row {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          width: 100%;
        }
        .product-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          
        }
        .product-row {
          display: flex;
          flex-wrap: wrap;
          overflow-x: auto;
          width: 100%;
          
        }
        
        .product-card {
          flex-basis: 16.66%;
        }
        
        .banner {
          background-image: url('https://storage.googleapis.com/eezee-banner-images/4lIFLboZl0EEIGm1t3W25m.jpg');
          background-size: cover;
          background-position: center;
          width: 100%;
          height: 385px;
        }
      `}</style>
      </Layout>
    </>

  );
};

export default Index;
