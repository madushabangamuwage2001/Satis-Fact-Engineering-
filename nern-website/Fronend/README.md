# Contents of /nern-website/nern-website/client/README.md

# NERN Website

This project is a web application built using the NERN stack (Node.js, Express, React, and MongoDB). It features a client-side React application that includes a home page, about us page, and contact us page.

## Project Structure

- **client/**: Contains the React application.
  - **src/**: Source files for the React application.
    - **components/**: Contains React components for different pages.
      - **About.jsx**: Renders the About Us page.
      - **Contact.jsx**: Renders the Contact Us page.
      - **Home.jsx**: Renders the Home page.
      - **Navbar.jsx**: Provides navigation links for the website.
    - **App.jsx**: Main application component that sets up routing.
    - **index.jsx**: Entry point for the React application.

- **server/**: Contains the server-side application.
  - **src/**: Source files for the server application.
    - **controllers/**: Functions that handle requests for different routes.
    - **models/**: Data models used in the application.
    - **routes/**: API routes for the server.
    - **config/**: Configuration files, including database connection.
    - **server.js**: Entry point for the server application.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

4. Set up your environment variables in the `.env` file in the server directory.

5. Start the server:
   ```
   npm start
   ```

6. Start the client application:
   ```
   cd ../client
   npm start
   ```

## License

This project is licensed under the MIT License.