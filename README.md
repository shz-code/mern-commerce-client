# MERN-Commerce Client Repository

This repository contains the client-side code for an e-commerce store built using `React` and `Redux`. The client communicates with a Node.js Express API to interact with the backend.

Backend for the project is [Here](https://github.com/shz-code/mern-commerce-backend).

Short Introduction Videos:

[![YouTube](https://img.shields.io/badge/Auth-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtu.be/7h17J71X6fY) [![YouTube](https://img.shields.io/badge/Features-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtu.be/V1HASblbNXU)

# Features

### User authentication:

- Users can register and log in using their email and password.
- Users can also authenticate using their Google or Facebook accounts using Passport.js.
- Authentication is managed using JSON Web Tokens (JWT).

### Extensive product filtering:

- The website provides advanced product filtering options to help users find the products they are looking for easily.

### Cart and checkout functionality:

- Users can add products to their cart and proceed to checkout.
- The checkout process includes applying coupons and verifying them.
- SSL Commerz sandbox is used to validate payments securely.

### Admin functionality:

- An admin user can add new products to the store.
- Admins can also create new product categories to organize the products effectively.
- Additionally, admins can create coupons with usage limits and validity periods.

### Technologies Used

- **React**: The client-side framework used to build the user interface.
- **Redux**: The state management library used to manage the application's state.
- **JSON Web Tokens (JWT)**: A secure method for transmitting information between parties as JSON objects.
- **SSL Commerz**: A payment gateway for secure online transactions.

# Getting Started

To run the `MERN-Commerce` store locally, follow these steps:

#### Clone the repository:

```bash
git clone https://github.com/shz-code/mern-commerce-client.git
```

#### Navigate to the project directory:

```bash
cd mern-commerce-client
```

#### Install the dependencies:

```bash
npm install
```

#### Configure the API endpoint:

- **In the project directory, create the .env file**
- Set the `VITE_API_URL` variable to the URL of your backend API.

#### Start the development server:

```bash
npm start
```

#### The MERN-Commerce client will be accessible at http://localhost:5173 in your web browser.

# Contributing

Contributions to the e-commerce store client repository are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

When contributing, please adhere to the following guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Follow the existing coding style and conventions.
- Provide clear and detailed commit messages.
- Write tests for any new functionality and ensure existing tests pass.

# License

The `MERN-Commerce` client repository is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code for your own purposes.
