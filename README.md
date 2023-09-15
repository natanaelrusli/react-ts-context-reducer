# Simple Product Cart

## Introduction

The Simple Product Cart project is a web application that allows users to view a list of products and interact with a shopping cart. It is built using React and leverages React Hooks such as `useReducer` and `useContext` to manage state and enable the following functionalities:

- Add a product to the cart.
- Display a cart summary that includes the product title, price, and quantity for each item.
- Calculate the total price of all the products in the cart.

This readme provides an overview of the project, its key features, and how to set it up and use it.

## Features

### 1. Product List

- The application displays a list of products, each with details such as title, price, and description.

### 2. Add Product to Cart

- Users can click an "Add to Cart" button next to each product to add it to their shopping cart.

### 3. Cart Summary

- The cart summary is dynamically updated as products are added, displaying the following information for each product in the cart:
  - Product title
  - Price
  - Quantity
- Users can see a running total of the price of all items in the cart.

## Setup

To set up and run the Simple Product Cart project locally, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your computer.

### Installation

1. Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/natanaelrusli/react-ts-context-reducer
   ```

2. Navigate to the project directory:

   ```bash
   cd react-ts-context-reducer
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

This will launch the application in your default web browser.

### Usage

- Open the project in your web browser.
- Browse through the grid of products displayed on the screen.
- Click the "Add to Cart" button next to a product to add it to your shopping cart.
- Observe that the cart summary on the screen updates to show the products in the cart, their prices, quantities, and the total price.
- Continue adding products to the cart and watch the summary change accordingly.
- Enjoy exploring and using the Simple Product Cart!

### Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the project repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them with clear and concise commit messages.
4. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request from your forked repository to the original project repository.
6. Your pull request will be reviewed, and once approved, your changes will be merged.

### Acknowledgments

This project was created to demonstrate the use of React Hooks such as useReducer and useContext to manage state in a simple e-commerce application. Special thanks to the React community and the developers who contributed to the React ecosystem.
