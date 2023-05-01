

# Eezee Test

This is a project for the Eezee internship test.

## Getting Started

To get started, clone this repository and navigate to the eezee-test directory

```
cd eezee-intern-test/eezee-test
```

Run the following command to install the required dependencies:

```
npm install
```

Once the dependencies are installed, run the following command to start the development server:

```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages

The following pages are included in this project:

- `pages/index.jsx`: The home page, which lists all of the products.
- `pages/product/[id].jsx`: The product page, which displays details about a specific product.
- `pages/all-brands.jsx`: The all brands page, which lists all of the brands alphabetically.
- `pages/all-products.jsx`: The all products page, which lists all of the products.
- `pages/api/cart.js`: The API route for the cart functionality.

## Components

The following reusable components are used in this project:

- `components/main-header.jsx`: The main header component, which is displayed at the top of each page.
- `components/layout.jsx`: The layout component, which provides a consistent layout for all pages.
- `components/card.jsx`: The parent card component.
- `components/product-card.jsx`: The product card component, which is used to display a single product card.
- `components/brand-card.jsx`: The brand card component, which is used to display a single brand card.

## Functionality

The following functionalities are implemented in this project:

- Able to add to cart with different quantity
- Able to persist cart quantity across all pages
- Able to redirect to Product Page
- Able to redirect to Home Page 
  - Clicking On Eezee Logo
- Able to redirect to All Brands Page
  - View All Brands
  - View More
- Able to redirect to All Products Page
  - View More
- Able to sort products from price high to low & price low to high

## Additional Functionality

The following additional functionalities are implemented in this project:
- Error Handling
  - Url Abnormal Spacing
  - Duplicate Brand Name ( For All Brands, Homepage allows same brand name with different ID due to different considerations(Dove = Soap/Chocolate Brand) so 2 different implementations were provided)
  - Dummy Image Inserted for brands with no images
- Product Details sets the price and quantity section to be put below for dynamic sizing (Mobile Phone)
- Product Quantity minimum number is based on MOQ

## Data

The following data files are included in this project:

- `src/data/brands.json`: The JSON file containing data about all of the brands.
- `src/data/products.json`: The JSON file containing data about all of the products.

## Technologies Used

The following technologies are used in this project:

- Next.js
- styled-jsx
- React

## Contributors

Abdullah