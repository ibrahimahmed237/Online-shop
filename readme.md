# Online shop Application

This is a Node.js application for managing products. It allows administrators to add, edit products, manage user authentication, handle checkout operations with Stripe, and send emails for signup confirmation and password reset. It also includes error handling for common HTTP status codes, pagination for product listing, generates a PDF file for the checkout, provides cart operations, manages orders, handles user registration and password reset, manages products, validates user and product information, uses Express.js as the web framework, EJS as the view engine, and sessions for storing user data.

## Installation

First, clone the repository to your local machine:

```bash
`git clone git@github.com/ibrahimahmed237/Online-shop.git`
```

Then, navigate to the project directory and install the dependencies:

```bash
npm install
```

## Usage

To start the application, run:

```bash
npm start
```

## Features

- User Registration: Users can register with their name, email, and password. The information is validated to ensure it meets the requirements.
- User Authentication: Register and login functionality with validation and password hashing.
- Password Reset: Users can reset their passwords if they forget them. An email will be sent with a reset link.
- Email Confirmation: Users receive a confirmation email upon successful signup.
- Add new products: Administrators can add new products with title, price, description, and image. The product information is validated to ensure it meets the requirements.
- Edit existing products
- Validate product information
- Upload product images (supports .jpg, .jpeg, .png, .bmp)
- Error Handling: Custom error pages for 404 (Page Not Found) and 500 (Internal Server Error) status codes.
- Pagination: Product listing includes pagination for easy navigation.
- Product Detail Viewing: Users can view the details of a specific product.
- Cart Operations: Users can view their cart, add products to the cart, and manage cart items.
- Checkout with Stripe: Users can securely checkout using Stripe.
- PDF Generation: Generates a PDF file for the checkout.
- Order Management: Users can place orders. Each order contains a list of products with their quantities and user information.
- Product Management: Administrators can manage products, including adding new products and editing existing ones.
- Validation: The application validates user and product information using Joi.
- Express.js: The application uses Express.js as the web framework.
- EJS: The application uses EJS as the view engine.
- Sessions: The application uses sessions for storing user data.
- MongoDB: The application uses MongoDB for session storage.
- CSRF Protection: The application uses CSRF protection for security.
- Flash Messages: The application uses flash messages for notifications.
- Routes: The application has routes for admin, shop, and authentication.

## Dependencies

- Express.js: For handling server and routes.
- bcrypt: For hashing passwords and ensuring user security.
- nodemailer: For sending emails.
- Multer: For handling multipart/form-data, which is primarily used for uploading files.
- Sharp: For converting large images in common formats to smaller, web-friendly JPEG, PNG and WebP images of varying dimensions.
- Stripe: For handling secure checkout operations.
- Mongoose: For modeling and managing application data.
- Joi: For validating user and product information.
- connect-mongodb-session: For MongoDB session storage.
- csurf: For CSRF protection.
- connect-flash: For flash messages.
- EJS: For the view engine.
- express-session: For handling sessions.
- Other dependencies...

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

