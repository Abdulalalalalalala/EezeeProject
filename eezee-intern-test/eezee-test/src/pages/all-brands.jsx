import React from 'react';
import Layout from '@/components/layout';
import Title from '../components/title';
import BrandCard from '../components/brand-card';

import brandsData from '../data/brands.json';

const groupByFirstLetter = (brands) => {
  const groupedBrands = {};
  brands.forEach((brand) => {
    const firstLetter = brand.name[0].toUpperCase();
    if (!groupedBrands[firstLetter]) {
      groupedBrands[firstLetter] = [];
    }
    groupedBrands[firstLetter].push(brand);
  });
  return groupedBrands;
};

const AllBrands = () => {
  const groupedBrands = groupByFirstLetter(brandsData);
  const sortedLetters = Object.keys(groupedBrands).sort();

  return (
    <Layout title="All Brands">
      <Title mainTitle="All Brands" subTitle="Browse the full catalog of brands today" />
      <div className="container mx-auto ">
        {sortedLetters.map((letter) => (
          <div key={letter}>
            <h2 className="alphabet-section">{letter}</h2>
            <div className="brands-row">
              {groupedBrands[letter].sort((a, b) => a.name.localeCompare(b.name)).map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
        }
        .alphabet-section {
          font-size: 24px;
          font-weight: bold;
          margin: 10px 0;
        }
        .brands-row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default AllBrands;
