import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout';
import productData from '../../data/products.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useCart } from '../../contexts/cart-contexts';
import Button from '@mui/material/Button';

const getProductById = (id) => {
  return productData.find((product) => product.id === id);
};

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const carouselRef = React.useRef(null);
  const { addItemToCart,cartItems } = useCart();
  console.log('ProductPage cartItems:', cartItems);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(activeImageIndex);
    }
  }, [activeImageIndex]);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    addItemToCart(product, quantity);
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToFavourite = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const router = useRouter();
  const { id } = router.query;
  const product = getProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    images,
    title,
    metadata,
    highPricePretty,
    lowPricePretty,
    descriptionHtml,
  } = product;
  const { brandImage, brand, model } = metadata;



  const carouselImages = images.map((image, index) => (
    <img
      key={index}
      src={image.url}
      alt={`Product Image ${index}`}
      className=""
    />
  ));
  
  const previewImages = images.map((image, index) => (
    <img
      key={index}
      src={image.url}
      alt={`Product Preview Image ${index}`}
      onClick={() => setActiveImageIndex(index)}
      className={`preview-image ${
        activeImageIndex === index ? 'border-blue-600' : ''
      }`}
    />
  ));
  

  return (
    <Layout title={title}>
      <div className="container mx-auto">
        <div className="flex flex-row mt-6">
          <div className="flex-1">
            <h1 className=" text-3xl font-bold mt-10">{title}</h1>
            <div className="flex flex-row justify-start mt-8 items-center">
              <img
                className="brand-logo mr-8"
                src={brandImage}
                alt={`${brand} logo`}
              />
              <div>
              <div className="model text-gray-600">Model: <span className="dark-blue">{model}</span></div>
    <div className="brand text-gray-600">Brand: <span className="dark-blue">{brand}</span></div>
               </div>
            </div>
            <div className="mt-10">
  <Carousel
    ref={carouselRef}
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className="carousel-container"
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024,
        },
        items: 1,
        partialVisibilityGutter: 40,
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
    }}
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
    
  >
    {carouselImages}
  </Carousel>
  <div className="mt-4 flex justify-center space-x-4 preview-images-container">
  {previewImages}
</div>

</div>
<div className="mt-10">
  <h2 className="text-2xl font-bold">Product Description</h2>
  <div
    className="mt-4 description"
    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
  />
</div>
</div>
<div className="flex-1 flex flex-col items-start">
<div className="price text-blue-600 text-xl font-bold">
  {lowPricePretty}
</div>
<div className="quantity-selector mt-2 flex items-center">
  <span className="mr-2">Quantity:</span>
  <Button className="button" variant="contained" color="primary" onClick={handleDecreaseQuantity}>-</Button>
  <input
    className="mx-2 text-center"
    type="number"
    value={quantity}
    min={1}
    readOnly
  />
  <Button className="button" variant="contained" color="primary" onClick={handleIncreaseQuantity}>+</Button>
</div>
<div className="my-2">
  <Button className="button" variant="contained" color="primary" onClick={handleAddToCart}>Add to cart</Button>
</div>
<div className="my-2">
  <Button className="button" variant="outlined" color="primary" onClick={handleAddToFavourite}>Add to Favourite</Button>
</div>
</div>
</div>
</div>
<div className ="footer"></div>
<style jsx global>{`
  .dark-blue{
    color: blue;
  }
  .footer{
    margin-bottom: 15em;
  }
  .brand-logo {
    width: 100px;
    height: auto;
  }
  .quantity-selector {
    display: flex;
    align-items: center;
  }

  .quantity-selector input {
    width: 40px;
  }

  .cart-count {
    top: -4px;
    right: -8px;
    background-color: blue;
    color: white;
    border-radius: 50%;
    font-size: 10px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .preview-images-container .preview-image {
    width: 100px;
    height: 100px; // Set the height explicitly
    object-fit: cover; // Add this line
    cursor: pointer;
    border: 2px solid transparent;
  }
  .preview-images-container .preview-image.border-blue-600 {
    border-color: blue;
  }
  .carousel-container .react-multi-carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .carousel-container .react-multi-carousel-item img {
    width: 40em;
    height: auto;
    object-fit: contain;
  }
`}</style>

</Layout>
);

};

export default ProductPage;
