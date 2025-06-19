# nern-website/nern-website/README.md

# NERN Website

This project is a web application built using the NERN stack (Node.js, Express, React, and MongoDB). It features a simple website with the following pages:

- Home Page
- About Us Page
- Contact Us Page

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client-side of the application is built with React and is located in the `client` directory. It includes:

- `src/components`: Contains the React components for the different pages.
- `src/App.jsx`: The main application component that sets up routing.
- `src/index.jsx`: The entry point for the React application.
- `package.json`: Configuration file for the client-side application.

### Server

The server-side of the application is built with Node.js and Express and is located in the `server` directory. It includes:

- `src/controllers`: Contains the logic for handling requests.
- `src/models`: Defines the data models for MongoDB.
- `src/routes`: Sets up the API routes.
- `src/config`: Contains the database configuration.
- `src/server.js`: The entry point for the server application.
- `package.json`: Configuration file for the server-side application.
- `.env`: Contains environment variables for the server.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
2. Navigate to the `client` directory and run `npm install` to install client-side dependencies.
3. Navigate to the `server` directory and run `npm install` to install server-side dependencies.
4. Set up your MongoDB database and update the `.env` file with your connection string.
5. Start the server by running `node src/server.js` from the `server` directory.
6. Start the client by running `npm start` from the `client` directory.

## License

This project is licensed under the MIT License.