import foodModel from "../models/foodModel.js";
import userModel from "../models/userModel.js";

// Add review to a food item
const addReview = async (req, res) => {
    try {
        const { foodId, rating, comment } = req.body;
        const userId = req.body.userId;

        // Check if user exists
        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Check if food exists
        const food = await foodModel.findById(foodId);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        // Check if user has already reviewed this food
        const existingReview = food.reviews.find(review => review.userId.toString() === userId);
        if (existingReview) {
            return res.json({ success: false, message: "You have already reviewed this item" });
        }

        // Add new review
        const newReview = {
            userId,
            userName: user.name,
            rating: Number(rating),
            comment,
            date: new Date()
        };

        food.reviews.push(newReview);

        // Calculate new average rating
        const totalRatings = food.reviews.reduce((sum, review) => sum + review.rating, 0);
        food.averageRating = totalRatings / food.reviews.length;
        food.totalReviews = food.reviews.length;

        await food.save();

        res.json({
            success: true,
            message: "Review added successfully",
            data: {
                averageRating: food.averageRating,
                totalReviews: food.totalReviews
            }
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding review" });
    }
};

// Get reviews for a food item
const getReviews = async (req, res) => {
    try {
        const { foodId } = req.params;

        const food = await foodModel.findById(foodId).populate('reviews.userId', 'name');
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        res.json({
            success: true,
            data: {
                reviews: food.reviews,
                averageRating: food.averageRating,
                totalReviews: food.totalReviews
            }
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching reviews" });
    }
};

// Get top rated food items
const getTopRatedFoods = async (req, res) => {
    try {
        const { limit = 10 } = req.query;

        const topRatedFoods = await foodModel.find({
            totalReviews: { $gt: 0 }
        })
        .sort({ averageRating: -1, totalReviews: -1 })
        .limit(parseInt(limit));

        res.json({
            success: true,
            data: topRatedFoods
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching top rated foods" });
    }
};

// Update review
const updateReview = async (req, res) => {
    try {
        const { foodId, rating, comment } = req.body;
        const userId = req.body.userId;

        const food = await foodModel.findById(foodId);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        const reviewIndex = food.reviews.findIndex(review => review.userId.toString() === userId);
        if (reviewIndex === -1) {
            return res.json({ success: false, message: "Review not found" });
        }

        // Update the review
        food.reviews[reviewIndex].rating = Number(rating);
        food.reviews[reviewIndex].comment = comment;
        food.reviews[reviewIndex].date = new Date();

        // Recalculate average rating
        const totalRatings = food.reviews.reduce((sum, review) => sum + review.rating, 0);
        food.averageRating = totalRatings / food.reviews.length;

        await food.save();

        res.json({
            success: true,
            message: "Review updated successfully",
            data: {
                averageRating: food.averageRating,
                totalReviews: food.totalReviews
            }
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating review" });
    }
};

// Delete review
const deleteReview = async (req, res) => {
    try {
        const { foodId } = req.params;
        const userId = req.body.userId;

        const food = await foodModel.findById(foodId);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }

        const reviewIndex = food.reviews.findIndex(review => review.userId.toString() === userId);
        if (reviewIndex === -1) {
            return res.json({ success: false, message: "Review not found" });
        }

        // Remove the review
        food.reviews.splice(reviewIndex, 1);

        // Recalculate average rating
        if (food.reviews.length > 0) {
            const totalRatings = food.reviews.reduce((sum, review) => sum + review.rating, 0);
            food.averageRating = totalRatings / food.reviews.length;
            food.totalReviews = food.reviews.length;
        } else {
            food.averageRating = 0;
            food.totalReviews = 0;
        }

        await food.save();

        res.json({
            success: true,
            message: "Review deleted successfully",
            data: {
                averageRating: food.averageRating,
                totalReviews: food.totalReviews
            }
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error deleting review" });
    }
};

export { addReview, getReviews, getTopRatedFoods, updateReview, deleteReview };
