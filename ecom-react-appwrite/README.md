# eCommerce Project

This is an eCommerce project built using React.js + Vite, Appwrite BaaS, and Tailwind CSS. It aims to provide a modern and responsive platform for online shopping.

## Features

- **Product Listings**: Browse through a wide range of products.
- **Product Details**: View detailed information about each product.
- **User Authentication**: Secure user authentication powered by Appwrite BaaS.
- **Shopping Cart**: Add products to the shopping cart for easy checkout.
- **Order Management**: Manage orders and track their status.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Razorpay Payment Gateway**: Payment Gateway with all Indian payment options.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Appwrite BaaS (Backend as a Service)**: Provides user authentication, database, and storage functionalities.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs with ease.

## Installation

1. **Clone the repository:**

2. **Install dependencies:**

    ```bash
    cd ecom-react-appwrite
    npm install
    ```

3. **Set up Appwrite :**
   - Sign up for an account on [Appwrite](https://appwrite.io/).
   - Create a new project and set up authentication, database, and storage according to your requirements.
   - Obtain the API keys, collection ID, and endpoint URLs required for authentication and database access.

### Appwrite Database Schema

#### Collections

##### Users

- **Fields**:
  - `id` (string): Unique identifier for the user.
  - `name` (string): Name of the user.
  - `email` (string): Email address of the user.
  - `phoneNum`  
  - `password` 

##### Products

- **Fields**:
  - `id` (string): Unique identifier for the product.
  - `title` (string): Name of the product.
  - `description` (string): Description of the product.
  - `category`  
  - `date`  
  - `imgUrl`
  - `price`

##### Orders

- **Fields**:
  - `id` (string): Unique identifier for the order.
  - `userid` (string): Identifier of the user who placed the order (foreign key).
  - `paymentId`  
  - `status` 
  - `date`  
  - `addressInfoJsonString`
  - `cartItems`

#### Relationships

- **Users - Orders**:
  - Each user can have multiple orders.
 
- **Products - Orders**:
  - Each order can contain multiple products.

4. **Configure environment variables:**
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables and replace the placeholders with your actual Razorpay credentials:
   - Change the AppWrite configuration in appwrite/appwriteConfig.js file. 
   
    ```plaintext
    REACT_APP_APPWRITE_ENDPOINT=your-appwrite-endpoint
    REACT_APP_APPWRITE_PROJECT_ID=your-appwrite-project-id
    REACT_APP_APPWRITE_API_KEY=your-appwrite-api-key
    VITE_PAYMENT_GATEWAY_KEY=your-razorpay-api-key
    VITE_PAYMENT_GATEWAY_KEY_SECRET=your-razorpay-api-key
    ```

5. **Start the development server:**

    ```bash
    npm run dev
    ```

6. **Open [http://localhost:XXXX](http://localhost:XXXX) in your browser to view the application. (XXXX is your port no.)**

## Contributing
Contributions are welcome! Cheers 🥂
