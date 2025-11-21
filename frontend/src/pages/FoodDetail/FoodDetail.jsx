import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FoodDetail.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';

const FoodDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { url, token, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    
    const [food, setFood] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
    const [showReviewForm, setShowReviewForm] = useState(false);

    useEffect(() => {
        fetchFoodDetails();
        fetchReviews();
    }, [id]);

    const fetchFoodDetails = async () => {
        try {
            const response = await axios.get(`${url}/api/food/${id}`);
            if (response.data.success) {
                setFood(response.data.data);
            }
        } catch (error) {
            console.log("Error fetching food details:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${url}/api/review/${id}`);
            if (response.data.success) {
                setReviews(response.data.data.reviews);
            }
        } catch (error) {
            console.log("Error fetching reviews:", error);
        }
    };

    const handleAddReview = async (e) => {
        e.preventDefault();
        if (!token) {
            alert("Please login to add a review");
            return;
        }

        try {
            const response = await axios.post(
                `${url}/api/review/add`,
                {
                    foodId: id,
                    rating: newReview.rating,
                    comment: newReview.comment
                },
                { headers: { token } }
            );

            if (response.data.success) {
                setNewReview({ rating: 5, comment: '' });
                setShowReviewForm(false);
                fetchFoodDetails();
                fetchReviews();
                alert("Review added successfully!");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log("Error adding review:", error);
            alert("Error adding review");
        }
    };

    const renderStars = (rating, interactive = false, onStarClick = null) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= rating ? 'filled' : 'empty'} ${interactive ? 'interactive' : ''}`}
                    onClick={interactive ? () => onStarClick(i) : undefined}
                >
                    {i <= rating ? '⭐' : '☆'}
                </span>
            );
        }
        return stars;
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="food-detail-loading">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    if (!food) {
        return (
            <div className="food-detail-error">
                <h2>Food item not found</h2>
                <button onClick={() => navigate('/menu')}>Back to Menu</button>
            </div>
        );
    }

    return (
        <div className="food-detail-container">
            <div className="food-detail-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← Back
                </button>
            </div>

            <div className="food-detail-content">
                <div className="food-detail-image">
                    <img src={`${url}/images/${food.image}`} alt={food.name} />
                </div>

                <div className="food-detail-info">
                    <h1 className="food-title">{food.name}</h1>
                    
                    <div className="food-rating">
                        <div className="stars">
                            {renderStars(food.averageRating || 0)}
                        </div>
                        <span className="rating-text">
                            {food.averageRating ? `${food.averageRating.toFixed(1)} (${food.totalReviews} reviews)` : 'No reviews yet'}
                        </span>
                    </div>

                    <p className="food-description">{food.description}</p>
                    
                    <div className="food-category">
                        <span className="category-tag">{food.category}</span>
                    </div>

                    <div className="food-price">${food.price}</div>

                    <div className="food-actions">
                        {!cartItems[id] ? (
                            <button 
                                className="add-to-cart-btn"
                                onClick={() => addToCart(id)}
                            >
                                Add to Cart
                            </button>
                        ) : (
                            <div className="quantity-controls">
                                <button onClick={() => removeFromCart(id)}>-</button>
                                <span>{cartItems[id]}</span>
                                <button onClick={() => addToCart(id)}>+</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <div className="reviews-header">
                    <h2>Customer Reviews</h2>
                    {token && (
                        <button 
                            className="write-review-btn"
                            onClick={() => setShowReviewForm(!showReviewForm)}
                        >
                            Write a Review
                        </button>
                    )}
                </div>

                {showReviewForm && (
                    <form className="review-form" onSubmit={handleAddReview}>
                        <h3>Write Your Review</h3>
                        
                        <div className="rating-input">
                            <label>Rating:</label>
                            <div className="stars">
                                {renderStars(newReview.rating, true, (rating) => 
                                    setNewReview({...newReview, rating})
                                )}
                            </div>
                        </div>

                        <div className="comment-input">
                            <label>Comment:</label>
                            <textarea
                                value={newReview.comment}
                                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                                placeholder="Write your review here..."
                                required
                                rows="4"
                            />
                        </div>

                        <div className="form-actions">
                            <button type="button" onClick={() => setShowReviewForm(false)}>
                                Cancel
                            </button>
                            <button type="submit">Submit Review</button>
                        </div>
                    </form>
                )}

                <div className="reviews-list">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <div className="review-header">
                                    <div className="reviewer-info">
                                        <h4>{review.userName}</h4>
                                        <span className="review-date">{formatDate(review.date)}</span>
                                    </div>
                                    <div className="review-rating">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                                <p className="review-comment">{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="no-reviews">No reviews yet. Be the first to review this item!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
