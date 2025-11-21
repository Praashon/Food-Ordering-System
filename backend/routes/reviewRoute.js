import express from "express";
import { addReview, getReviews, getTopRatedFoods, updateReview, deleteReview } from "../controllers/reviewController.js";
import authMiddleware from "../middleware/auth.js";

const reviewRouter = express.Router();

// Add review (requires authentication)
reviewRouter.post("/add", authMiddleware, addReview);

// Get reviews for a food item
reviewRouter.get("/:foodId", getReviews);

// Get top rated foods
reviewRouter.get("/top/rated", getTopRatedFoods);

// Update review (requires authentication)
reviewRouter.put("/update", authMiddleware, updateReview);

// Delete review (requires authentication)
reviewRouter.delete("/:foodId", authMiddleware, deleteReview);

export default reviewRouter;
