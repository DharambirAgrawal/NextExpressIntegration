import express from "express";
import cors from "cors";
import { errorHandler } from "./src/errors/index.js";
import { logger } from "./src/utils/logger.js";
import { userRouter } from "./src/routes/userRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "UP" });
});
app.use("/api/user", userRouter);

// Global error handling middleware
app.use(errorHandler);

export default app;
