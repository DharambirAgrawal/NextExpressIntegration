# Full Stack Express and Next.js Starter

This project is a full-stack boilerplate combining **Express.js** (for server-side API routes) and **Next.js** (for server-side rendering and frontend). It includes basic error handling, middleware, and a sample user route. The project is ready to run in both development and production environments.

## Features

- **Express.js** for backend API and routing
- **Next.js** for React-based frontend with SSR (Server-Side Rendering)
- **CORS** and **JSON** middleware for easy API consumption
- Error handling middleware for graceful error responses
- Graceful shutdown handling for production
- Environment configuration with **dotenv**

---

## Folder Structure

```bash
├── .env                   # Environment variables file
├── package.json            # Project dependencies and scripts
├── server.js               # Main server configuration
├── app.js                  # Express app configuration
├── src/
│   ├── errors/             # Custom error handling
│   │   └── index.js
│   ├── routes/             # API route definitions
│   │   └── userRoutes.js
│   └── utils/              # Utility functions (e.g., logging)
│       └── logger.js
└── pages/                  # Next.js pages (Frontend)
```

---

## Prerequisites

- **Node.js** version >= 14.x.x
- **npm** or **yarn**

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/express-next-starter.git
   cd express-next-starter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or if using **yarn**:

   ```bash
   yarn install
   ```

---

## Setup

1. Create a `.env` file in the root directory and add the following variables:

   ```env
   NODE_ENV=development   # or production
   PORT=3000
   ```

2. Customize your `userRoutes.js` inside `src/routes` for additional API routes.

---

## Scripts

### Development

To run both **server** (Express) and **client** (Next.js) in development mode:

```bash
npm run dev
```

This will:

- Start the server on `http://localhost:3000`.
- Use Next.js in development mode for hot-reloading and server-side rendering.

### Server only

To run only the backend server (Express):

```bash
npm run server
```

### Client only

To run only the frontend (Next.js):

```bash
npm run client
```

### Production Build

To build the app for production:

```bash
npm run build
```

After building, run the app with:

```bash
npm run start
```

### Production Mode

To run the app in production mode, set the environment to **production**:

```bash
NODE_ENV=production npm run prod
```

This will use the build output from Next.js and Express.

---

## Error Handling

This starter project includes basic error handling using middleware. Errors in the Express app are passed to the `errorHandler` middleware to be processed and sent back to the client.

### Error Handling Flow

1. Express routes (e.g., `/api/user`) can throw errors.
2. The error is passed to the `errorHandler` middleware in `src/errors/index.js`.
3. The error handler returns a JSON response with an appropriate HTTP status code.

Example of a typical error handler in `src/errors/index.js`:

```js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};
```

---

## Graceful Shutdown

The server includes graceful shutdown handling for **uncaught exceptions** and **unhandled promise rejections**.

- If an uncaught exception occurs, the server will log the error and shut down.
- If there’s an unhandled promise rejection, the server will attempt to close all open connections before exiting.
- A `SIGTERM` signal will gracefully shut down the server.

This ensures that the server can handle production issues without abrupt termination.

---

## Next.js Configuration

The project uses **Next.js** for the frontend and server-side rendering. The server is set up to handle both the API and the Next.js pages.

- When the environment is **production**, the app uses the build version of Next.js.
- When in **development**, Next.js runs in development mode.

You can modify the Next.js pages under the `pages/` directory. For example, the default home page (`pages/index.js`) will render your React components.

---

## Example Routes

1. **Health Check**: Check if the API is running

   - Endpoint: `GET /api/health`
   - Response: `{ "status": "UP" }`

2. **User Routes**: Sample user routes are defined in `src/routes/userRoutes.js`.

   - Endpoint: `GET /api/user`
   - Response: `{ "users": [...] }`

---

## Logs

Logging functionality is provided via the `logger` middleware. All incoming requests and errors are logged to the console, allowing for easy debugging.

For example:

```js
// src/utils/logger.js
export const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
```

---

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Next.js](https://nextjs.org/)
- [dotenv](https://www.npmjs.com/package/dotenv) for environment variable management.

--- 

This starter project provides the foundation for building a full-stack application with modern technologies. You can extend it with additional routes, pages, database support, authentication, and more to meet your project needs!
