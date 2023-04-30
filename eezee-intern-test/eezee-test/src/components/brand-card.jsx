import React from "react";
import Image from "next/image";
import Card from "./base-card";

const BrandCard = ({ brand }) => {
  const defaultImageUrl = "https://via.placeholder.com/135x60"; // Replace this with your preferred default image URL
  const imageUrl = brand.image?.url?.replace(' ', '').trim() ?? defaultImageUrl;


  return (
    <Card
      image={imageUrl}
      altText={`${brand.name} logo`}
      className="h-full"
    >
      <div className="brand-details">
        <span className="brand-name">{brand.name}</span>
        <br />
        <span className="product-count">{brand.productCount} Products</span>
      </div>
      <style jsx>{`
        .brand-details {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .brand-name {
          font-size: 1.1em;
          font-weight: bold;
        }

        .product-count {
          font-size: 0.9em;
          
        }
      `}</style>
    </Card>
  );
};

export default BrandCard;
