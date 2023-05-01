import React from "react";
import Image from "next/image";
import Card from "./card";

const BrandCard = ({ brand }) => {
  // Define the default image URL to be used when there's no image URL in the data
  const defaultImageUrl = "https://via.placeholder.com/135x60"; // Replace this with your preferred default image URL

  // Get the brand image URL from the data or use the default URL if it doesn't exist or has invalid characters
  const imageUrl = brand.image?.url?.replace(' ', '').trim() ?? defaultImageUrl;

  return (
    // Render the brand card as a Card component with an image and some details
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
        /* Style the brand details container */
        .brand-details {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Style the brand name */
        .brand-name {
          font-size: 1.1em;
          font-weight: bold;
        }

        /* Style the product count */
        .product-count {
          font-size: 0.9em;
        }
      `}</style>
    </Card>
  );
};

// Export the BrandCard component as the default export
export default BrandCard;
