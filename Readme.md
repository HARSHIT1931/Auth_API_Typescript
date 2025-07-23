#  Authentication API using Node.js, Express, and TypeScript

This is a basic **Authentication API** built with **Node.js**, **Express**, and **TypeScript**, following scalable project architecture and best practices.

---

---

## Folder Structure Explanation

- **`config/`**  
  Contains the database connection logic using Mongoose.

- **`controllers/`**  
  Handles business logic for user registration and login.

- **`middlewares/`**
  - `auth.middleware.ts`: Validates JWT token for protected routes.
  - `error.middleware.ts`: Centralized error handling middleware.

- **`models/`**  
  Contains the Mongoose schema for the `User` model.

- **`interfaces/`**  
  TypeScript interfaces for consistent typing across the app (e.g., `IUser`).

- **`routes/`**  
  Defines all the authentication routes (`/register`, `/login`).

- **`utils/`**  
  Contains helper functions like `generateToken()` for JWT creation.

- **`validations/`** (optional but recommended)  
  Input validation schemas using Joi or Zod.

- **`app.ts`**  
  Initializes the Express app, applies middleware (CORS, Helmet, Rate Limiter), and registers routes.

- **`server.ts`**  
  Loads environment variables, connects to MongoDB, and starts the server.

- **`.env`**  
  Stores sensitive configuration like DB URI and JWT secrets.

---
