# Product List

## Overview

This project is a responsive web page that displays a list of products fetched from a provided JSON endpoint. It is built using Next.js, a modern React framework. The web page includes filtering and sorting functionality for the product list and uses animations to enhance the user experience.

## Features

- Fetch product data from a JSON endpoint.
- Responsive design for different screen sizes (desktop, tablet, mobile).
- Filtering and sorting functionality for the product list.
- Animations and transitions for a better user experience.

## Tech Stack

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making requests to the JSON endpoint.
- **Framer Motion**: A library for animations and transitions in React.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.

## Setup and Installation

### Prerequisites

- Node.js (v12 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/esinniobiwaquareeb/nextjs-product-list.git
```

2. Navigate to the project directory:

```bash
cd product-list
```

3. Install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the Application

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application running.

### Build for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

Then, to start the production server:

```bash
npm start
# or
yarn start
```

## Project Structure

```
/components
  - Footer.tsx
  - Header.tsx
/pages
  - index.tsx
  - products/[id].tsx
/styles
  - globals.css
/types
  - product.ts
/next.config.js
/README.md
```

### Components

- **Footer.tsx**: The footer component for the application.
- **Header.tsx**: The header component for the application.

### Pages

- **index.tsx**: The main page that displays the list of products with filtering and sorting functionality.
- **products/[id].tsx**: The detail page for a single product.

### Types

- **product.ts**: Defines the `Product` type used in the application.

### Configuration

- **next.config.js**: Configuration file for Next.js, including the configuration to allow images from the `cdn.dummyjson.com` domain.

## Usage

### Product List Page (`index.tsx`)

- Fetches product data from the endpoint `https://dummyjson.com/products`.
- Displays the list of products with images, titles, and prices.
- Allows filtering products by title.
- Allows sorting products by price (ascending and descending).
- Pagination is implemented to navigate through the product list.

### Product Detail Page (`products/[id].tsx`)

- Fetches product data for a specific product from the endpoint `https://dummyjson.com/products/{id}`.
- Displays detailed information about the product, including the image, title, price, and description.

## Animations

- **Framer Motion**: Used for adding animations to the product cards on the product list page.

## Styling

- **Tailwind CSS**: Used for responsive design and styling.

## Notes

- The project uses Next.js for server-side rendering, which helps with SEO and performance.
- The product data is fetched using Axios, a popular HTTP client for making requests.
