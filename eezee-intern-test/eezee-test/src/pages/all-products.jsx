import React, { useState } from 'react';
import Layout from '@/components/layout';
import Title from '../components/title';
import ProductCard from '../components/product-card';

import productData from '../data/products.json';

const ITEMS_PER_PAGE = 10;

const Sidebar = ({ totalResults }) => {
  return (
    <div className="sidebar">
      <h2>Products</h2>
      <p>{totalResults} results</p>
      <style jsx>{`
        .sidebar {
          width: 250px;
          padding-right: 20px;
        }
        h2 {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

const sortProducts = (products, sortOrder) => {
  if (sortOrder === 'price-high-to-low') {
    return products.sort((a, b) => b.highPrice - a.highPrice);
  } else if (sortOrder === 'price-low-to-high') {
    return products.sort((a, b) => a.lowPrice - b.lowPrice);
  } else {
    return products;
  }
};

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('relevance');

  const totalPages = Math.ceil(productData.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const displayedProducts = sortProducts(productData, sortOrder).slice(start, end);

  const handleSortButtonClick = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  return (
    <Layout title="All Products">
      <Title mainTitle="All Products" subTitle="Browse the full catalog of products today" />
      <div className="all-products container mx-auto">
        <Sidebar totalResults={productData.length} />
        <div className="products-main">
          <div className="page-info">
            Page {currentPage} of about {totalPages} results
          </div>
          <div className="sort-container">
            <span>Sort by:</span>
            <button
              className={`sort-btn ${sortOrder === 'relevance' ? 'active' : ''}`}
              onClick={() => handleSortButtonClick('relevance')}
            >
              Relevance
            </button>
            <button
              className={`sort-btn ${sortOrder === 'price-high-to-low' ? 'active' : ''}`}
              onClick={() => handleSortButtonClick('price-high-to-low')}
            >
              Price: High to Low
            </button>
            <button
              className={`sort-btn ${sortOrder === 'price-low-to-high' ? 'active' : ''}`}
              onClick={() => handleSortButtonClick('price-low-to-high')}
            >
              Price: Low to High
            </button>
          </div>
          <div className="products-grid">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .all-products {
            display: flex;
            padding: 20px;
          }
          .products-main {
            flex-grow: 1;
          }
          .page-info {
            margin-bottom: 10px;
          }
          .sort-container {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }
          .sort-container span {
            margin-right: 10px;
          }
          .sort-btn {
            margin-right: 5px;
            padding: 5px 10px;
            border: 1px solid #ccc;
            background-color: #fff;
            color: #333;
            cursor: pointer;
            transition: 0.3s;
          }
          .sort-btn:hover {
            border-color: #0070f3;
          }
          .sort-btn.active {
            border-color: #0070f3;
            color: #0070f3;
          }
          .products-grid {
            display: flex;
            flex-wrap: wrap;
          }
      `}</style>
    </Layout>
  );
};

export default AllProducts;
