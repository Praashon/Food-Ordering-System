import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'

const FoodItem = ({id,name,price,description,image,averageRating,totalReviews}) => {

    const{cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

    // Function to get image URL with fallback
    const getImageUrl = (imageName) => {
        if (!imageName) return '/placeholder-food.jpg';
        
        // If it's a direct filename, use it with the backend URL
        if (imageName.includes('.')) {
            return `${url}/images/${imageName}`;
        }
        
        // If it's just a name, add .jpg extension
        return `${url}/images/${imageName}.jpg`;
    };

    // Function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star filled">⭐</span>);
        }
        
        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">⭐</span>);
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }
        
        return stars;
    };

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <Link to={`/food/${id}`}>
                <img 
                    className="food-item-image" 
                    src={getImageUrl(image)} 
                    alt={name}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/320x200/ff6347/white?text=' + encodeURIComponent(name);
                    }}
                />
            </Link>
            {!cartItems[id]
                ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <Link to={`/food/${id}`} className="food-item-name-link">
                    <p>{name}</p>
                </Link>
                <div className="rating-container">
                    {averageRating && averageRating > 0 ? (
                        <>
                            <div className="stars">
                                {renderStars(averageRating)}
                            </div>
                            <span className="rating-text">
                                {averageRating.toFixed(1)} ({totalReviews || 0})
                            </span>
                        </>
                    ) : (
                        <span className="no-rating">No ratings yet</span>
                    )}
                </div>
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className='food-item-price'>
                Rs. {price}
            </p>
        </div>
    </div>
  )
}

export default FoodItem