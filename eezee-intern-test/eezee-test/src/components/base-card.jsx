import Image from "next/image";
import React from "react";

const getTagDivClass = (tagItem) => {
  switch (tagItem.color) {
    case "moq-color":
      return "bg-[#EFEFF0] text-[#55585D]";
    case "bulk-discount-color":
      return "bg-[#f1c277] text-[#6A5001]";
    case "vip-price-color":
      return "bg-[#c0daf7] text-[#2a64db]";
    default:
      return "";
  }
};

const Card = ({ image, altText, children, className, tags }) => {
  let tagDivs = [];

  if (tags) {
    tagDivs = tags.map((tagItem, index) => (
      <div
        className={`tagDiv absolute text-xs p-0.5 font-bold left-0 ${getTagDivClass(tagItem)}`}
        style={{ bottom: `${index * 1.25}rem` }}
        key={index}
      >
        {tagItem.name}
      </div>
    ));
  }

  return (
    <>
      <div className={`cardWrapper card ${className}`}>
        {image && (
          <div className="imageWrapper">
            <div className="innerImageWrapper">
              {image && altText && (
                <Image
                  src={image}
                  alt={altText}
                  height={200}
                  width={200}
                  className="mx-auto h-full object-contain object-center"
                />
              )}
            </div>
            {tagDivs}
          </div>
        )}
        {children}
      </div>
      <style jsx>{`
        .card{
            width: 16em;
            height:20em;
            padding:3em;
            
        }
        .cardWrapper {
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
          
          
        }
        .imageWrapper {
          width: 100%;
          height: 10rem;
          min-height: 0;
          position: relative;
          
        }
        .innerImageWrapper {
          width: 100%;
          height: 8rem;
          min-height: 0;
          position: relative;
        }
        .card {
         
          flex-basis: 16.66%;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Card;
