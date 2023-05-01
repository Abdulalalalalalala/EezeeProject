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
    // Check if the brand name already exists in the array for the current first letter
    if (!groupedBrands[firstLetter].some(b => b.name === brand.name)) {
      groupedBrands[firstLetter].push(brand);
    } else {
      console.log(`Duplicate brand name: ${brand.name}`);
    }
  });
  return groupedBrands;
};


const AllBrands = () => {
  // Group the brands by their first letter
  const groupedBrands = groupByFirstLetter(brandsData);
  // Get the sorted list of keys (first letters) from the grouped brands object
  const sortedLetters = Object.keys(groupedBrands).sort();

  return (
    // Render the layout and the main content
    <Layout title="All Brands">
      <Title mainTitle="All Brands" subTitle="Browse the full catalog of brands today" />
      <div className="container mx-auto ">
        {sortedLetters.map((letter) => (
          // Render the section for each first letter and its brands
          <div key={letter}>
            <h2 className="alphabet-section">{letter}</h2>
            <div className="brands-row">
              {groupedBrands[letter]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((brand) => (
                  // Render each brand as a BrandCard component
                  <BrandCard key={brand.id} brand={brand} />
                ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          padding: 1.25rem;
        }
        .alphabet-section {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.625rem 0;
        }
        .brands-row {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }
      `}</style>
    </Layout>
  );
};

export default AllBrands;
